import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

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

export default  function RootLayout({children }: Readonly<{ children: React.ReactNode; }>) {

    return (

            <html lang="en">
            <body  className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-roboto">
            <Header />
            {children}
            <Analytics />
            <Footer />
            </body>
            <GoogleAnalytics gaId={"G-KB4RRDK878"} />
            </html>

    );
}
