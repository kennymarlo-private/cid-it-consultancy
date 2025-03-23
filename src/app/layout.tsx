import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "CID IT Consultancy - IT Solutions",
    description: "Providing top-tier IT consulting services.",
    keywords: ["IT consulting", "software development", "CID IT Consultancy"],
    authors: [{ name: "CID IT Consultancy", url: "https://ciditconsultancy.com" }],
    openGraph: {
        title: "CID IT Consultancy - IT Solutions",
        description: "Your trusted partner for IT solutions.",
        url: "https://ciditconsultancy.com",
        images: [
            { url: "https://ciditconsultancy.com/og-image.jpg" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@CID_IT_Consultancy",
        title: "CID IT Consultancy - IT Solutions",
        description: "Providing top-tier IT consulting services.",
        images: ["https://ciditconsultancy.com/twitter-image.jpg"],
    },
};

export default function RootLayout({children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        </body>
        </html>
    );
}
