import Breadcrumb from "@/components/Breadcrumb";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "SHOWCASE | CID IT CONSULTANCY - IT SOLUTIONS",
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

export default function ShowcasePage() {
    return (
        <main className="p-8">
            <Breadcrumb
                items={[
                    {label: 'Home', href: '/'},
                    {label: 'Showcase'},
                ]}
            />
            <h1 className="text-3xl font-bold text-gray-800">Showcase</h1>
            <ul className="mt-4 space-y-2">
                <li>✅ IT Consulting</li>
                <li>✅ Software Development</li>
                <li>✅ Cybersecurity Audits</li>
                <li>✅ Cloud Solutions</li>
            </ul>
        </main>
    );
}
