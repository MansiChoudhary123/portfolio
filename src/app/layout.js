import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mansi Choudhary Portfolio",
  description:
    "Mansi Choudhary portfolio for MERN stack developer, full stack developer, frontend developer",
  icons: [
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/Images/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/Images/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/Images/apple-touch-icon.png" },
    { rel: "manifest", url: "/Images/site.webmanifest" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
