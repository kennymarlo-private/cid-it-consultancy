import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
    title: "Privacy Policy | CID IT CONSULTANCY - IT SOLUTIONS",
    description: "Privacy Policy for CID IT Consultancy. Learn how we collect, use, and protect your personal data in compliance with Philippine Data Privacy Act.",
    keywords: ["Privacy Policy", "Data Privacy Act", "personal data protection", "Philippine privacy law", "CID IT Consultancy"],
    authors: [{ name: "CID IT Consultancy", url: "https://ciditconsultancy.com" }],
    openGraph: {
        title: "Privacy Policy - CID IT Consultancy",
        description: "Privacy Policy for CID IT Consultancy in compliance with Philippine Data Privacy Act.",
        url: "https://ciditconsultancy.com/privacy-policy",
        images: [
            { url: "https://ciditconsultancy.com/og-image.jpg" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@ciditconsultancy",
        title: "Privacy Policy - CID IT Consultancy",
        description: "Privacy Policy for CID IT Consultancy in compliance with Philippine Data Privacy Act.",
        images: ["https://ciditconsultancy.com/twitter-image.jpg"],
    },
};

export default function PrivacyPolicyPage() {
    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Privacy Policy"
                subtitle="How we collect, use, and protect your personal data in compliance with Philippine Data Privacy Act"
                imageUrl="/why.jpg"
            />

            {/* Breadcrumb */}
            <section className="px-4 py-4 bg-white">
                <Breadcrumb 
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Privacy Policy" },
                    ]} 
                />
            </section>

            {/* Privacy Policy Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                            
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                                <p className="text-gray-600 mb-4">
                                    <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                                <p className="text-gray-600">
                                    This Privacy Policy describes how CID IT Consultancy ("Company," "we," "us," or "our") collects, uses, and protects your personal data 
                                    in compliance with Republic Act No. 10173 (Data Privacy Act of 2012) and its implementing rules and regulations.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* 1. Data Controller */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Data Controller</h3>
                                    <p className="text-gray-600 mb-3">
                                        <strong>CID IT Consultancy</strong><br />
                                        49 Tandang Sora St, Parang, Marikina 1809<br />
                                        Philippines<br />
                                        Contact: +63 998 533 3825<br />
                                        Email: info@ciditconsultancy.com<br />
                                        Data Protection Officer: info@ciditconsultancy.com
                                    </p>
                                </div>

                                {/* 2. Personal Data We Collect */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Personal Data We Collect</h3>
                                    <p className="text-gray-600 mb-3">We may collect the following types of personal data:</p>
                                    
                                    <h4 className="text-lg font-medium text-gray-800 mb-2">2.1 Contact Information</h4>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1 mb-4">
                                        <li>Name, email address, phone number</li>
                                        <li>Company name and position</li>
                                        <li>Business address and contact details</li>
                                    </ul>

                                    <h4 className="text-lg font-medium text-gray-800 mb-2">2.2 Technical Information</h4>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1 mb-4">
                                        <li>IP address and device information</li>
                                        <li>Browser type and version</li>
                                        <li>Website usage data and analytics</li>
                                        <li>Cookies and similar technologies</li>
                                    </ul>

                                    <h4 className="text-lg font-medium text-gray-800 mb-2">2.3 Business Information</h4>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                                        <li>Project requirements and specifications</li>
                                        <li>Technical documentation and files</li>
                                        <li>Communication records and correspondence</li>
                                        <li>Payment and billing information</li>
                                    </ul>
                                </div>

                                {/* 3. How We Collect Personal Data */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. How We Collect Personal Data</h3>
                                    <p className="text-gray-600 mb-3">We collect personal data through:</p>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                                        <li>Direct interactions (contact forms, emails, phone calls)</li>
                                        <li>Website usage and analytics tools</li>
                                        <li>Service agreements and contracts</li>
                                        <li>Third-party service providers (with consent)</li>
                                        <li>Public sources and business directories</li>
                                    </ul>
                                </div>

                                {/* 4. Legal Basis for Processing */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Legal Basis for Processing</h3>
                                    <p className="text-gray-600 mb-3">We process your personal data based on the following legal grounds:</p>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                                        <li><strong>Consent:</strong> When you explicitly agree to our data processing activities</li>
                                        <li><strong>Contract Performance:</strong> To fulfill our service obligations</li>
                                        <li><strong>Legitimate Interest:</strong> To improve our services and business operations</li>
                                        <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                                        <li><strong>Vital Interest:</strong> To protect your safety or the safety of others</li>
                                    </ul>
                                </div>

                                {/* 5. Purpose of Data Processing */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Purpose of Data Processing</h3>
                                    <p className="text-gray-600 mb-3">We use your personal data for the following purposes:</p>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                                        <li>Providing IT consulting and development services</li>
                                        <li>Communicating with clients and prospects</li>
                                        <li>Processing payments and managing billing</li>
                                        <li>Improving our services and website</li>
                                        <li>Complying with legal and regulatory requirements</li>
                                        <li>Marketing and business development (with consent)</li>
                                        <li>Ensuring security and preventing fraud</li>
                                    </ul>
                                </div>

                                {/* 6. Data Sharing and Disclosure */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Data Sharing and Disclosure</h3>
                                    <p className="text-gray-600 mb-3">We may share your personal data with:</p>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                                        <li>Service providers and contractors (under strict confidentiality agreements)</li>
                                        <li>Legal and regulatory authorities (when required by law)</li>
                                        <li>Business partners (with your explicit consent)</li>
                                        <li>Professional advisors and consultants</li>
                                    </ul>
                                    <p className="text-gray-600 mt-3">
                                        We do not sell, rent, or trade your personal data to third parties for marketing purposes.
                                    </p>
                                </div>

                                {/* 7. Data Security */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Data Security</h3>
                                    <p className="text-gray-600 mb-3">
                                        We implement appropriate technical and organizational security measures to protect your personal data, including:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                                        <li>Encryption of data in transit and at rest</li>
                                        <li>Access controls and authentication mechanisms</li>
                                        <li>Regular security assessments and updates</li>
                                        <li>Employee training on data protection</li>
                                        <li>Incident response and breach notification procedures</li>
                                    </ul>
                                </div>

                                {/* 8. Data Retention */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Data Retention</h3>
                                    <p className="text-gray-600 mb-3">
                                        We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, 
                                        or as required by applicable laws and regulations. Retention periods vary based on the type of data and purpose:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                                        <li>Client data: Duration of service + 5 years for legal compliance</li>
                                        <li>Website analytics: 2 years</li>
                                        <li>Marketing data: Until consent withdrawal</li>
                                        <li>Financial records: 10 years (tax compliance)</li>
                                    </ul>
                                </div>

                                {/* 9. Your Rights */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Your Rights Under the Data Privacy Act</h3>
                                    <p className="text-gray-600 mb-3">You have the following rights regarding your personal data:</p>
                                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                                        <li><strong>Right to be Informed:</strong> Know what personal data we collect and how we use it</li>
                                        <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                                        <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                                        <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                                        <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                                        <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                                        <li><strong>Right to Object:</strong> Object to certain processing activities</li>
                                        <li><strong>Right to Damages:</strong> Seek compensation for privacy violations</li>
                                    </ul>
                                </div>

                                {/* 10. Exercising Your Rights */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Exercising Your Rights</h3>
                                    <p className="text-gray-600 mb-3">
                                        To exercise your rights, please contact our Data Protection Officer at:
                                    </p>
                                    <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                        <p className="text-gray-700">
                                            <strong>Data Protection Officer</strong><br />
                                            Email: info@ciditconsultancy.com<br />
                                            Phone: +63 998 533 3825<br />
                                            Address: 49 Tandang Sora St, Parang, Marikina 1809, Philippines
                                        </p>
                                    </div>
                                    <p className="text-gray-600">
                                        We will respond to your request within 30 days, as required by the Data Privacy Act.
                                    </p>
                                </div>

                                {/* 11. Cookies and Tracking */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Cookies and Tracking Technologies</h3>
                                    <p className="text-gray-600 mb-3">
                                        We use cookies and similar technologies to enhance your browsing experience and analyze website usage. 
                                        You can control cookie settings through your browser preferences.
                                    </p>
                                </div>

                                {/* 12. International Data Transfers */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">12. International Data Transfers</h3>
                                    <p className="text-gray-600 mb-3">
                                        Your personal data may be transferred to and processed in countries other than the Philippines. 
                                        We ensure appropriate safeguards are in place to protect your data in accordance with the Data Privacy Act.
                                    </p>
                                </div>

                                {/* 13. Children's Privacy */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">13. Children's Privacy</h3>
                                    <p className="text-gray-600 mb-3">
                                        Our services are not intended for children under 18 years of age. We do not knowingly collect personal data from children. 
                                        If we become aware that we have collected such data, we will take steps to delete it promptly.
                                    </p>
                                </div>

                                {/* 14. Changes to This Policy */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">14. Changes to This Privacy Policy</h3>
                                    <p className="text-gray-600 mb-3">
                                        We may update this Privacy Policy from time to time. Changes will be posted on our website with an updated effective date. 
                                        We encourage you to review this policy periodically.
                                    </p>
                                </div>

                                {/* 15. Contact Information */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">15. Contact Information</h3>
                                    <p className="text-gray-600 mb-3">
                                        For questions about this Privacy Policy or our data practices, please contact us:
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

                                {/* Data Privacy Act Compliance Notice */}
                                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                                    <h4 className="text-lg font-semibold text-green-900 mb-2">Data Privacy Act Compliance Notice</h4>
                                    <p className="text-green-800 text-sm">
                                        This Privacy Policy is designed to comply with Republic Act No. 10173 (Data Privacy Act of 2012) 
                                        and its implementing rules and regulations. We are committed to protecting your privacy rights 
                                        and ensuring the security of your personal data in accordance with Philippine law.
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