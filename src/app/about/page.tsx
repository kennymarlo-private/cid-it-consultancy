import Breadcrumb from "@/components/Breadcrumb";
import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "ABOUT US | CID IT CONSULTANCY - IT SOLUTIONS",
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

export default function AboutPage() {
    return (
    <>
        {/* Hero Section */}
        <Hero
            imageUrl="/about-us-hero.jpg"
        />
        <section className="px-4 py-4  bg-background">
            <Breadcrumb
                items={[
                    {label: 'Home', href: '/'},
                    {label: 'About Us'},
                ]}
            />
        </section>

        <AboutSection />

    </>
    );
}
