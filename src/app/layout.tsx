import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { randomUUID } from "crypto";
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "CID IT CONSULTANCY - IT SOLUTIONS",
    description: "Where Innovation Meets Impact",
    keywords: ["IT consulting", "software development", "CID IT Consultancy", "tech", "software auditing"],
    authors: [{ name: "CID IT Consultancy", url: "https://ciditconsultancy.com" }],
    openGraph: {
        title: "CID IT Consultancy - IT Solutions",
        description: "Where Innovation Meets Impact.",
        url: "https://ciditconsultancy.com",
        images: [
            { url: "https://ciditconsultancy.com/og-image.jpg" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@ciditconsultancy",
        title: "CID IT Consultancy - IT Solutions",
        description: "Where Innovation Meets Impact.",
        images: ["https://ciditconsultancy.com/twitter-image.jpg"],
    },
};

export default function RootLayout({children }: Readonly<{ children: React.ReactNode; }>) {
    const nonce = randomUUID();
    return (
        <html lang="en">
        <body className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-roboto">
        <Header />
        {children}
        <GoogleTagManager gtmId={"GTM-PD8R59QT"} nonce={nonce} />
        <GoogleAnalytics gaId={"G-DYGTL8VWVD"} dataLayerName={"CID IT CONSULTANCY"} nonce={nonce} />
        <Footer />
        </body>
        </html>
    );
}
