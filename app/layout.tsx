import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Crux — The key ideas in any book",
    template: "%s — Crux",
  },
  description:
    "Not summaries. The 5–10 atomic ideas that make a book worth reading — written by editors, in plain English.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
