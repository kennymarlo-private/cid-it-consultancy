import type {Metadata} from "next";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
    title: "CONTACT US | CID IT CONSULTANCY - IT SOLUTIONS",
    description: "Get in touch with CID IT Consultancy for innovative IT solutions. Contact us for software development, consulting, and system integration services.",
    keywords: ["IT consulting", "software development", "CID IT Consultancy", "tech", "software auditing", "contact", "get quote"],
    authors: [{ name: "CID IT Consultancy", url: "https://ciditconsultancy.com" }],
    openGraph: {
        title: "Contact Us - CID IT Consultancy",
        description: "Get in touch with CID IT Consultancy for innovative IT solutions and expert consulting services.",
        url: "https://ciditconsultancy.com/contact",
        images: [
            { url: "https://ciditconsultancy.com/og-image.jpg" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@ciditconsultancy",
        title: "Contact Us - CID IT Consultancy",
        description: "Get in touch with CID IT Consultancy for innovative IT solutions and expert consulting services.",
        images: ["https://ciditconsultancy.com/twitter-image.jpg"],
    },
};

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <Hero
                imageUrl="/contact-us.jpg"
            />

            {/* Breadcrumb */}
            <section className="px-4 py-4 bg-white">
                <Breadcrumb 
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Contact" },
                    ]} 
                />
            </section>

            {/* Contact Form Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <ContactForm />
                </div>
            </section>
        </>
    );
}
