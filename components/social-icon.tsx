type SocialIconProps = {
  label: string;
};

export default function SocialIcon({ label }: SocialIconProps) {
  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.48v-1.73c-2.78.62-3.37-1.21-3.37-1.21-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1.01.07 1.55 1.06 1.55 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.17 9.17 0 0 1 12 7.8c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.81-4.59 5.06.36.32.69.96.69 1.94v2.88c0 .26.18.59.69.48A10.29 10.29 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
        <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3 8.72h3.95V21H3V8.72Zm6.53 0h3.79v1.68h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V21h-3.95v-5.45c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.89V21H9.53V8.72Z" />
      </svg>
    );
  }

  if (label === "Resume") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18" />
      <path d="M6 9h12" />
      <path d="M6 15h12" />
    </svg>
  );
}
