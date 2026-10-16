import type { Metadata } from "next";
import { Geist, Pixelify_Sans } from "next/font/google";
import { TabBar } from "./components/TabBar";
import { Footer } from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayden Shin",
  description:
    "Software Eng @ Waterloo. Builds software, speaks at the UN.",
  metadataBase: new URL("https://jaydenshin.com"),
  openGraph: {
    title: "Jayden Shin",
    description: "Software Eng @ Waterloo. Builds software, speaks at the UN.",
    type: "website",
  },
};

// Plays the battle-start wipe once per session, decided before first paint.
const introScript = `try{if(!sessionStorage.getItem("pk-intro")){document.documentElement.classList.add("pk-intro");sessionStorage.setItem("pk-intro","1")}}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${pixelify.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body suppressHydrationWarning className="flex min-h-svh flex-col">
        <div className="pk-intro-overlay" aria-hidden>
          <div className="flash" />
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="bar"
              style={{ top: `${i * 12.5}%`, animationDelay: `${0.42 + i * 0.035}s` }}
            />
          ))}
        </div>
        <TabBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
