import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "CONTACT US | CID IT CONSULTANCY - IT SOLUTIONS",
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

export default function ContactPage() {
    return (
        <>
            <section className="py-16 bg-background">

            </section>
        </>
    );
}
