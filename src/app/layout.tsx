import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Menu from "../components/layout/Menu";
import TitleToggler from "../components/layout/TitleToggler";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next";

const aktura = localFont({
  src: "../../public/fonts/Aktura-Regular.ttf",
  variable: "--font-aktura",
});

const harmond = localFont({
  src: "../../public/fonts/Harmond-ExtraBoldExpanded.otf",
  variable: "--font-harmond",
});

const mathos = localFont({
  src: "../../public/fonts/TGMathosDemo-Regular.otf",
  variable: "--font-mathos",
});

const mathosBold = localFont({
  src: "../../public/fonts/TGMathosDemo-Bold.otf",
  variable: "--font-mathos-bold",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${aktura.variable} ${harmond.variable} ${mathos.variable} ${mathosBold.variable} ${instrumentSerif.variable}`}>
        <body className="bg-[#fffff0]">
          <Menu />
          <TitleToggler interval={60000} />
          {children}
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
