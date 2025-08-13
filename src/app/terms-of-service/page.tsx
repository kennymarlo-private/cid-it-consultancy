import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
    title: "Terms of Service | CID IT CONSULTANCY - IT SOLUTIONS",
    description: "Terms of Service for CID IT Consultancy. Learn about our service terms, conditions, and legal obligations in compliance with Philippine laws.",
    keywords: ["Terms of Service", "legal terms", "IT consulting terms", "Philippine law compliance", "CID IT Consultancy"],
    authors: [{ name: "CID IT Consultancy", url: "https://ciditconsultancy.com" }],
    openGraph: {
        title: "Terms of Service - CID IT Consultancy",
        description: "Terms of Service for CID IT Consultancy services in compliance with Philippine laws.",
        url: "https://ciditconsultancy.com/terms-of-service",
        images: [
            { url: "https://ciditconsultancy.com/og-image.jpg" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@ciditconsultancy",
        title: "Terms of Service - CID IT Consultancy",
        description: "Terms of Service for CID IT Consultancy services in compliance with Philippine laws.",
        images: ["https://ciditconsultancy.com/twitter-image.jpg"],
    },
};

export default function TermsOfServicePage() {
    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Terms of Service"
                subtitle="Legal terms and conditions governing our IT consulting services in compliance with Philippine laws"
                imageUrl="/why.jpg"
            />

            {/* Breadcrumb */}
            <section className="px-4 py-4 bg-white">
                <Breadcrumb 
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Terms of Service" },
                    ]} 
                />
            </section>

            {/* Terms of Service Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                            
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Service</h2>
                                <p className="text-gray-600 mb-4">
                                    <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                                <p className="text-gray-600">
                                    These Terms of Service ("Terms") govern your use of services provided by CID IT Consultancy ("Company," "we," "us," or "our"), 
                                    a Philippine-based IT consulting company operating under Philippine laws and regulations.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* 1. Acceptance of Terms */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
                                    <p className="text-gray-600 mb-3">
                                        By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, 
                                        you may not access our services. These Terms constitute a legally binding agreement between you and CID IT Consultancy.
                                    </p>
                                </div>

                                {/* 2. Company Information */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Company Information</h3>
                                    <p className="text-gray-600 mb-3">
                                        <strong>CID IT Consultancy</strong><br />
                                        49 Tandang Sora St, Parang, Marikina 1809<br />
                                        Philippines<br />
                                        Contact: +63 998 533 3825<br />
                                        Email: info@ciditconsultancy.com
                                    </p>
                                </div>

                                {/* 3. Services Description */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Services Description</h3>
                                    <p className="text-gray-600 mb-3">
                                        We provide IT consulting services including but not limited to:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                                        <li>Magnolia CMS implementation and customization</li>
                                        <li>IT consulting and strategic planning</li>
                                        <li>Custom software development</li>
                                        <li>System integration services</li>
                                        <li>Cybersecurity assessment and consulting</li>
                                        <li>Technical support and maintenance</li>
                                    </ul>
                                </div>

                                {/* 4. Client Obligations */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Client Obligations</h3>
                                    <p className="text-gray-600 mb-3">As a client, you agree to:</p>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                                        <li>Provide accurate and complete information necessary for service delivery</li>
                                        <li>Cooperate with our team and provide timely feedback</li>
                                        <li>Maintain confidentiality of any proprietary information shared</li>
                                        <li>Comply with all applicable Philippine laws and regulations</li>
                                        <li>Pay all fees and charges as agreed upon in service agreements</li>
                                        <li>Use our services only for lawful purposes</li>
                                    </ul>
                                </div>

                                {/* 5. Payment Terms */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Payment Terms</h3>
                                    <p className="text-gray-600 mb-3">
                                        All payments shall be made in Philippine Peso (PHP) unless otherwise agreed in writing. Payment terms and schedules 
                                        will be specified in individual service agreements. Late payments may result in suspension of services and may incur 
                                        additional charges as permitted by Philippine law.
                                    </p>
                                </div>

                                {/* 6. Intellectual Property */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Intellectual Property Rights</h3>
                                    <p className="text-gray-600 mb-3">
                                        Intellectual property rights shall be governed by the following principles in accordance with Philippine Intellectual Property Code:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                                        <li>Pre-existing intellectual property remains the property of its original owner</li>
                                        <li>Custom developments created specifically for clients shall be transferred upon full payment</li>
                                        <li>Proprietary tools and methodologies remain our property</li>
                                        <li>Open-source components shall be used in accordance with their respective licenses</li>
                                    </ul>
                                </div>

                                {/* 7. Data Privacy and Protection */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Data Privacy and Protection</h3>
                                    <p className="text-gray-600 mb-3">
                                        We are committed to protecting your privacy and personal data in compliance with Republic Act No. 10173 (Data Privacy Act of 2012) 
                                        and its implementing rules and regulations. Our data collection, processing, and protection practices are detailed in our Privacy Policy.
                                    </p>
                                </div>

                                {/* 8. Confidentiality */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Confidentiality</h3>
                                    <p className="text-gray-600 mb-3">
                                        Both parties agree to maintain the confidentiality of proprietary and sensitive information shared during the course of our engagement. 
                                        This obligation survives the termination of our services and is subject to legal requirements under Philippine law.
                                    </p>
                                </div>

                                {/* 9. Limitation of Liability */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Limitation of Liability</h3>
                                    <p className="text-gray-600 mb-3">
                                        Our liability is limited to the amount paid for the specific service giving rise to the claim, except where prohibited by Philippine law. 
                                        We shall not be liable for indirect, incidental, or consequential damages arising from the use of our services.
                                    </p>
                                </div>

                                {/* 10. Force Majeure */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Force Majeure</h3>
                                    <p className="text-gray-600 mb-3">
                                        Neither party shall be liable for delays or failures in performance due to circumstances beyond reasonable control, 
                                        including but not limited to natural disasters, government actions, or other events recognized as force majeure under Philippine law.
                                    </p>
                                </div>

                                {/* 11. Termination */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Termination</h3>
                                    <p className="text-gray-600 mb-3">
                                        Services may be terminated by either party with written notice as specified in service agreements. Upon termination, 
                                        all outstanding payments become due, and both parties shall return or destroy confidential information as required by law.
                                    </p>
                                </div>

                                {/* 12. Governing Law and Jurisdiction */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">12. Governing Law and Jurisdiction</h3>
                                    <p className="text-gray-600 mb-3">
                                        These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines. 
                                        Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Marikina City, Philippines.
                                    </p>
                                </div>

                                {/* 13. Amendments */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">13. Amendments</h3>
                                    <p className="text-gray-600 mb-3">
                                        We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. 
                                        Continued use of our services constitutes acceptance of modified terms.
                                    </p>
                                </div>

                                {/* 14. Contact Information */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">14. Contact Information</h3>
                                    <p className="text-gray-600 mb-3">
                                        For questions regarding these Terms of Service, please contact us at:
                                    </p>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-gray-700">
                                            <strong>CID IT Consultancy</strong><br />
                                            Email: info@ciditconsultancy.com<br />
                                            Phone: +63 998 533 3825<br />
                                            Address: 49 Tandang Sora St, Parang, Marikina 1809, Philippines
                                        </p>
                                    </div>
                                </div>

                                {/* Legal Compliance Notice */}
                                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                                    <h4 className="text-lg font-semibold text-blue-900 mb-2">Legal Compliance Notice</h4>
                                    <p className="text-blue-800 text-sm">
                                        These Terms of Service are designed to comply with applicable Philippine laws including but not limited to: 
                                        Republic Act No. 10173 (Data Privacy Act), Republic Act No. 10175 (Cybercrime Prevention Act), 
                                        Republic Act No. 8293 (Intellectual Property Code), and other relevant regulations governing IT services in the Philippines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 