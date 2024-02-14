import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dancing = Dancing_Script({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentine",
  description: "Valentine day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + dancing.className}>{children}</body>
    </html>
  );
}
