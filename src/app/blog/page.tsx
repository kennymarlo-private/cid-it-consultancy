import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
    title: "BLOG | CID IT CONSULTANCY - IT SOLUTIONS",
    description: "Stay updated with the latest insights, trends, and best practices in IT consulting and software development. Our blog is coming soon!",
    keywords: ["IT consulting blog", "software development insights", "tech trends", "CID IT Consultancy blog", "IT industry news"],
    authors: [{ name: "CID IT Consultancy", url: "https://ciditconsultancy.com" }],
    openGraph: {
        title: "Blog - CID IT Consultancy",
        description: "Stay updated with the latest insights, trends, and best practices in IT consulting and software development.",
        url: "https://ciditconsultancy.com/blog",
        images: [
            { url: "https://ciditconsultancy.com/og-image.jpg" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@ciditconsultancy",
        title: "Blog - CID IT Consultancy",
        description: "Stay updated with the latest insights, trends, and best practices in IT consulting and software development.",
        images: ["https://ciditconsultancy.com/twitter-image.jpg"],
    },
};

export default function BlogPage() {
    return (
        <>
            {/* Breadcrumb */}
            <section className="px-4 py-4 bg-white">
                <Breadcrumb 
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Blog" },
                    ]} 
                />
            </section>

            {/* Coming Soon Component */}
            <ComingSoon
                title="Blog Coming Soon"
                description="We're working on creating valuable content to share our expertise in IT consulting, software development, and industry insights. Our blog will feature technical articles, case studies, and best practices to help you stay ahead in the digital world."
                expectedDate="Q1 2026"
                showContactButton={true}
                contactButtonText="Get in Touch"
                contactButtonLink="/contact"
                icon="construction"
                background="white"
            />
        </>
    );
} 