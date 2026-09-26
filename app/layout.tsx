import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mokshitha. — personal portfolio",
  description:
    "Computer Science Engineering student building thoughtful web experiences and solving real-world problems.",
  keywords: [
    "Mokshitha Gali",
    "Portfolio",
    "Frontend Developer",
    "Full Stack",
    "Computer Science",
  ],
  authors: [{ name: "Mokshitha Gali" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream text-ink paper-texture min-h-screen selection:bg-cherry selection:text-cream">
        {children}
      </body>
    </html>
  );
}
