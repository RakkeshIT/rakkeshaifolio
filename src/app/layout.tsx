import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClickSpark from "../components/ClickSpark";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:"Rakkesh developer portfolio",
  description:
    "Rakkesh developer portfolio website showcasing skills and projects.",
  icons: {
    icon: "/titlelogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClickSpark sparkColor="red">
          <main>
          {children}
          </main>
        </ClickSpark>
      </body>
    </html>
  );
}
