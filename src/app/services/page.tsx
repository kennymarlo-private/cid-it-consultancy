import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import type {Metadata} from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "SERVICES | CID IT CONSULTANCY - IT SOLUTIONS",
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

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <Hero
                title="Our Services"
                subtitle="Tailored IT solutions built for innovation and impact"
                imageUrl="/our-services-hero.jpg"
                ctaText="Contact Us"
                ctaLink="/contact"
            />

            {/* Breadcrumb */}
            <section className="px-4 py-4">
                <Breadcrumb
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Services" },
                    ]}
                />
            </section>

            {/* Intro */}
            <section className="max-w-4xl mx-auto px-4 text-center py-8">
                <p className="text-muted-foreground text-lg">
                    CID IT Consultancy provides a broad range of IT services built to solve real-world challenges, streamline operations, and drive digital innovation across industries.
                </p>
            </section>

            {/* Service Sections */}
            <section className="max-w-screen-xl mx-auto px-4">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        link={service.link}
                        reverse={index % 2 === 1}
                    />
                ))}
            </section>

            {/* Final CTA */}
            <section className="bg-white">
                <CTA
                    title="Ready to Work Smarter? Let's Create What's Next."
                    description="CID IT Consultancy blends creativity and technology to deliver custom solutions that don’t just work — they lead. Whether you're modernizing systems or building from scratch, we're here to make innovation tangible."
                    buttonText="Talk to Our Team"
                    buttonLink="/contact"
                    buttonSubtext="Response within 24 hours — no commitment required"
                    variant="default"
                />
            </section>
        </>
    );
}
