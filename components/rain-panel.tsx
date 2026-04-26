"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import AmbientRain from "@/components/ambient-rain";
import InteractivePanel from "@/components/interactive-panel";

type RainPanelProps = {
  className?: string;
  desktopLabel?: string;
  mobileLabel?: string;
};

type RainDrop = {
  id: number;
  stage: "falling" | "settled";
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  drift: number;
  distance: number;
  duration: number;
  delay: number;
  rotation: number;
  settledX: number;
  settledBottom: number;
  settledWidth: number;
  settledHeight: number;
  settledOpacity: number;
  settledScale: number;
  pileColumn: number;
  pileLevel: number;
  resetBottom: number;
};

const HOLD_DELAY = 160;
const PILE_BASE_OFFSET = 12;
const PILE_CELL_SIZE = 12;
const PILE_STEP = 5.5;
const PILE_RESET_TOP_PADDING = 8;
const PILE_RESET_DELAY = 900;

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function clamp(value: number, min: number, max: number) {
  const safeMax = Math.max(min, max);
  return Math.min(safeMax, Math.max(min, value));
}

function getColumnLevels(drops: RainDrop[], panelWidth: number) {
  const columnCount = Math.max(1, Math.ceil(panelWidth / PILE_CELL_SIZE));
  const levels = Array.from({ length: columnCount }, () => 0);

  drops.forEach((drop) => {
    const column = clamp(drop.pileColumn, 0, columnCount - 1);
    levels[column] = Math.max(levels[column], drop.pileLevel + 1);
  });

  return levels;
}

function choosePileColumn(preferredColumn: number, levels: number[]) {
  const offsets = [0, -1, 1, -2, 2, -3, 3];
  let selectedColumn = clamp(preferredColumn, 0, levels.length - 1);
  let selectedLevel = levels[selectedColumn];

  offsets.forEach((offset) => {
    const column = preferredColumn + offset;

    if (column < 0 || column >= levels.length) {
      return;
    }

    const level = levels[column];

    if (level < selectedLevel) {
      selectedColumn = column;
      selectedLevel = level;
    }
  });

  return selectedColumn;
}

export default function RainPanel({
  className = "",
  desktopLabel = "Click to summon rain",
  mobileLabel = "Tap to wake the rain",
}: RainPanelProps) {
  const [paused, setPaused] = useState(false);
  const [drops, setDrops] = useState<RainDrop[]>([]);
  const holdTimerRef = useRef<number | null>(null);
  const holdActiveRef = useRef(false);
  const resetTimerRef = useRef<number | null>(null);
  const nextIdRef = useRef(0);

  const clearHoldTimer = useCallback(() => {
    if (holdTimerRef.current !== null) {
      window.clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  }, []);

  const clearResetTimer = useCallback(() => {
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }, []);

  const spawnBurst = useCallback((x: number, y: number, panelWidth: number, panelHeight: number) => {
    clearResetTimer();

    const burstCount = Math.round(randomBetween(8, 13));

    setDrops((current) => {
      const resetBottom = Math.max(0, panelHeight - PILE_RESET_TOP_PADDING);
      const levels = getColumnLevels(current, panelWidth);
      const nextDrops: RainDrop[] = Array.from({ length: burstCount }, (_, index) => {
        const id = nextIdRef.current += 1;
        const horizontalJitter = randomBetween(-28, 28);
        const preferredX = clamp(x + horizontalJitter, 8, panelWidth - 8);
        const preferredColumn = clamp(Math.round(preferredX / PILE_CELL_SIZE), 0, levels.length - 1);
        const pileColumn = choosePileColumn(preferredColumn, levels);
        const pileLevel = levels[pileColumn];
        levels[pileColumn] += 1;

        const settledWidth = randomBetween(5, 9);
        const settledHeight = randomBetween(2.4, 4.8);
        const settledX = clamp(
          pileColumn * PILE_CELL_SIZE + PILE_CELL_SIZE / 2 + randomBetween(-2.2, 2.2),
          6,
          panelWidth - 6,
        );
        const settledBottom = PILE_BASE_OFFSET + pileLevel * PILE_STEP + randomBetween(-0.8, 0.8);
        const startX = clamp(x + horizontalJitter * 0.35 + randomBetween(-10, 10), 4, panelWidth - 4);
        const finalCenterY = panelHeight - settledBottom - settledHeight / 2;
        const verticalJitter = randomBetween(-10, 8);
        const maxStartY = finalCenterY - randomBetween(34, 62);
        const startY = clamp(Math.min(y + verticalJitter, maxStartY), -10, panelHeight - 18);

        return {
          id,
          stage: "falling",
          x: startX,
          y: startY,
          width: randomBetween(1.3, 2.8),
          height: randomBetween(22, 52),
          opacity: randomBetween(0.42, 0.88),
          drift: settledX - startX,
          distance: Math.max(34, finalCenterY - startY),
          duration: randomBetween(1200, 2100),
          delay: index * randomBetween(0, 24),
          rotation: randomBetween(-12, 12),
          settledX,
          settledBottom,
          settledWidth,
          settledHeight,
          settledOpacity: randomBetween(0.5, 0.88),
          settledScale: randomBetween(0.85, 1.35),
          pileColumn,
          pileLevel,
          resetBottom,
        };
      });

      return [...current, ...nextDrops];
    });
  }, [clearResetTimer]);

  const settleHold = useCallback(() => {
    clearHoldTimer();
    if (holdActiveRef.current) {
      holdActiveRef.current = false;
      setPaused(false);
    }
  }, [clearHoldTimer]);

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (event.currentTarget.setPointerCapture) {
        try {
          event.currentTarget.setPointerCapture(event.pointerId);
        } catch {
          // Some browsers can reject capture for synthetic or touch transitions.
        }
      }

      spawnBurst(x, y, rect.width, rect.height);

      clearHoldTimer();
      holdActiveRef.current = false;
      holdTimerRef.current = window.setTimeout(() => {
        holdActiveRef.current = true;
        setPaused(true);
      }, HOLD_DELAY);
    },
    [clearHoldTimer, spawnBurst],
  );

  const handlePointerUp = useCallback(() => {
    settleHold();
  }, [settleHold]);

  const handlePointerCancel = useCallback(() => {
    settleHold();
  }, [settleHold]);

  const handlePointerLeave = useCallback(() => {
    if (holdActiveRef.current) {
      settleHold();
      return;
    }

    clearHoldTimer();
  }, [clearHoldTimer, settleHold]);

  useEffect(() => {
    return () => {
      clearHoldTimer();
      clearResetTimer();
    };
  }, [clearHoldTimer, clearResetTimer]);

  useEffect(() => {
    const reachedFillLimit = drops.some(
      (drop) => drop.stage === "settled" && drop.settledBottom + drop.settledHeight >= drop.resetBottom,
    );

    if (!reachedFillLimit || resetTimerRef.current !== null) {
      return;
    }

    resetTimerRef.current = window.setTimeout(() => {
      resetTimerRef.current = null;
      setDrops([]);
    }, PILE_RESET_DELAY);
  }, [drops]);

  return (
    <InteractivePanel
      tapRipple
      paused={paused}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onPointerLeave={handlePointerLeave}
      className={`group relative overflow-hidden cursor-pointer ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.08),transparent_58%)]" />
      <AmbientRain className="h-full" style={{ top: "0" }} />

      <div className="pointer-events-none absolute inset-0">
        {drops.map((drop) => {
          const isSettled = drop.stage === "settled";
          const dropStyle = isSettled
            ? ({
                left: `${drop.settledX}px`,
                bottom: `${drop.settledBottom}px`,
                width: `${drop.settledWidth}px`,
                height: `${drop.settledHeight}px`,
                opacity: drop.settledOpacity,
                transform: `translateX(-50%) rotate(${drop.rotation * 0.25}deg) scaleX(${drop.settledScale})`,
              } as CSSProperties)
            : ({
                left: `${drop.x}px`,
                top: `${drop.y}px`,
                width: `${drop.width}px`,
                height: `${drop.height}px`,
                opacity: drop.opacity,
                ["--rain-drift" as string]: `${drop.drift}px`,
                ["--rain-distance" as string]: `${drop.distance}px`,
                ["--rain-rotation" as string]: `${drop.rotation}deg`,
                ["--rain-duration" as string]: `${drop.duration}ms`,
                animationDelay: `${drop.delay}ms`,
              } as CSSProperties);

          return (
            <span
              key={drop.id}
              className={
                isSettled
                  ? "ambient-rain-settled absolute rounded-full bg-cyan-100/70"
                  : "ambient-rain-burst absolute rounded-full bg-cyan-200/75"
              }
              onAnimationEnd={
                isSettled
                  ? undefined
                  : () => {
                      setDrops((current) =>
                        current.map((item) => (item.id === drop.id ? { ...item, stage: "settled" } : item)),
                      );
                    }
              }
              style={dropStyle}
            />
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-3 p-4">
        <span className="hidden rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.62rem] uppercase tracking-[0.28em] text-white/42 opacity-0 transition duration-300 group-hover:opacity-100 md:inline-flex">
          {desktopLabel}
        </span>
        <span className="inline-flex rounded-full border border-cyan-200/15 bg-cyan-200/8 px-3 py-1 text-[0.62rem] uppercase tracking-[0.28em] text-cyan-50/68 md:hidden">
          {mobileLabel}
        </span>
      </div>
    </InteractivePanel>
  );
}
