import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "Shradha Garg | Java Developer & CS Student",
  description: "Portfolio of Shradha Garg — B.Tech Computer Science student at GLA University. Java Developer, Full Stack Enthusiast, and hackathon participant.",
  keywords: ["Shradha Garg", "Java Developer", "Full Stack Developer", "Portfolio", "GLA University"],
  authors: [{ name: "Shradha Garg" }],
  openGraph: {
    title: "Shradha Garg | Software Developer Portfolio",
    description: "Java Developer & Full Stack Enthusiast — B.Tech CSE at GLA University, Mathura.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        {/* Prevent theme flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})()` }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="noise-overlay" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
