import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
    title: "FAQ | CID IT CONSULTANCY - IT SOLUTIONS",
    description: "Frequently asked questions about CID IT Consultancy services. Get answers about our IT consulting, software development, Magnolia CMS, and cybersecurity services.",
    keywords: ["FAQ", "IT consulting questions", "software development FAQ", "Magnolia CMS", "cybersecurity services", "CID IT Consultancy"],
    authors: [{ name: "CID IT Consultancy", url: "https://ciditconsultancy.com" }],
    openGraph: {
        title: "FAQ - CID IT Consultancy",
        description: "Frequently asked questions about our IT consulting and software development services.",
        url: "https://ciditconsultancy.com/faq",
        images: [
            { url: "https://ciditconsultancy.com/og-image.jpg" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@ciditconsultancy",
        title: "FAQ - CID IT Consultancy",
        description: "Frequently asked questions about our IT consulting and software development services.",
        images: ["https://ciditconsultancy.com/twitter-image.jpg"],
    },
};

export default function FAQPage() {
    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our IT consulting services, Magnolia CMS solutions, and software development expertise."
                imageUrl="/why.jpg"
            />

            {/* Breadcrumb */}
            <section className="px-4 py-4 bg-white">
                <Breadcrumb 
                    items={[
                        { label: "Home", href: "/" },
                        { label: "FAQ" },
                    ]} 
                />
            </section>

            
            {/* FAQ Content */}
            <section className="py-16 bg-white">
                <FAQ />
            </section>
        </>
    );
} 