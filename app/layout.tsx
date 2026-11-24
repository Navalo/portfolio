import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fira = Fira_Code({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: `${profile.name} is a ${profile.role} based in ${profile.location}, building enterprise web applications with C#, .NET, ASP.NET Core, Angular and Azure.`,
  keywords: [profile.name, profile.role, "C#", ".NET", "ASP.NET Core", "Azure", "Angular", "Sri Lanka"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#07060d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fira.variable}`}>
      <body>{children}</body>
    </html>
  );
}
