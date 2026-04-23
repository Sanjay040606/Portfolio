import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjay S | Portfolio",
  description:
    "Portfolio for Sanjay S with responsive projects, smooth motion, and clean UI design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
