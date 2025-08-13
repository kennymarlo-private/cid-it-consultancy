"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqData: FAQItem[] = [
    // General Questions
    {
        question: "What services does CID IT Consultancy offer?",
        answer: "We offer comprehensive IT solutions including Magnolia CMS implementation and customization, IT consulting, system integration, custom software development, and cybersecurity assessment. Our services are designed to help businesses modernize their technology infrastructure and achieve digital transformation goals.",
        category: "General"
    },
    {
        question: "Where is CID IT Consultancy located?",
        answer: "We are based in Marikina, Philippines at 49 Tandang Sora St, Parang, Marikina 1809. However, we provide services globally and can work with clients remotely or on-site as needed.",
        category: "General"
    },
    {
        question: "How quickly do you respond to inquiries?",
        answer: "We typically respond within 24 hours during business days. For urgent matters, please include 'URGENT' in your message, and we'll prioritize your request accordingly.",
        category: "General"
    },
    
    // Magnolia CMS
    {
        question: "What is Magnolia CMS and why should I consider it?",
        answer: "Magnolia CMS is a powerful, enterprise-grade content management system that offers flexibility, scalability, and ease of use. It's ideal for businesses that need a robust platform for managing digital content, with features like personalization, multi-channel publishing, and seamless integration capabilities.",
        category: "Magnolia CMS"
    },
    {
        question: "What Magnolia CMS services do you provide?",
        answer: "We offer comprehensive Magnolia CMS services including PaaS setup assistance, custom feature development, system integration, migration from other platforms, training, and ongoing support. We can tailor the platform to meet your specific business requirements.",
        category: "Magnolia CMS"
    },
    {
        question: "Can you help migrate from another CMS to Magnolia?",
        answer: "Yes, we specialize in CMS migrations to Magnolia. Our team can assess your current system, plan the migration strategy, execute the transition with minimal downtime, and provide training for your team to ensure a smooth adoption process.",
        category: "Magnolia CMS"
    },
    
    // IT Consulting
    {
        question: "What does your IT consulting process involve?",
        answer: "Our IT consulting process starts with a thorough assessment of your current technology landscape, followed by strategic planning, technology recommendations, implementation roadmap, and ongoing support. We work closely with your team to ensure solutions align with your business objectives.",
        category: "IT Consulting"
    },
    {
        question: "Do you work with small businesses or only large enterprises?",
        answer: "We work with businesses of all sizes, from startups to large enterprises. Our approach is scalable and we tailor our services to meet the specific needs and budget constraints of each client, ensuring value for organizations at every stage of growth.",
        category: "IT Consulting"
    },
    {
        question: "How do you ensure your recommendations align with our business goals?",
        answer: "We begin every engagement with a deep dive into your business objectives, current challenges, and future vision. Our recommendations are always tied to measurable business outcomes, and we provide detailed roadmaps showing how each technology decision supports your strategic goals.",
        category: "IT Consulting"
    },
    
    // Software Development
    {
        question: "What technologies do you use for custom software development?",
        answer: "We use modern, scalable technologies including React, Node.js, Python, Java, and cloud platforms like AWS and Azure. Our technology stack is chosen based on your specific requirements, ensuring optimal performance, security, and maintainability.",
        category: "Software Development"
    },
    {
        question: "How long does custom software development typically take?",
        answer: "Development timelines vary based on project complexity, ranging from a few weeks for simple applications to several months for complex enterprise systems. We provide detailed project timelines during the planning phase and maintain regular communication throughout development.",
        category: "Software Development"
    },
    {
        question: "Do you provide ongoing maintenance and support for custom software?",
        answer: "Yes, we offer comprehensive maintenance and support services including bug fixes, feature updates, security patches, and performance optimization. We can provide ongoing support or train your internal team to maintain the software.",
        category: "Software Development"
    },
    
    // System Integration
    {
        question: "What types of systems can you integrate?",
        answer: "We can integrate virtually any business system including ERP systems, CRM platforms, e-commerce solutions, accounting software, HR systems, and custom applications. Our integration approach ensures seamless data flow and process automation across your entire technology ecosystem.",
        category: "System Integration"
    },
    {
        question: "How do you ensure data security during system integration?",
        answer: "Security is paramount in all our integration projects. We implement industry-standard security protocols, use secure APIs, encrypt data in transit and at rest, and follow best practices for authentication and authorization. We also conduct thorough security testing before deployment.",
        category: "System Integration"
    },
    {
        question: "What happens if there are issues after integration?",
        answer: "We provide comprehensive post-integration support including monitoring, troubleshooting, and maintenance. Our team is available to address any issues quickly, and we offer training to ensure your team can effectively manage the integrated systems.",
        category: "System Integration"
    },
    
    // Cybersecurity
    {
        question: "What does your cybersecurity assessment include?",
        answer: "Our cybersecurity assessment covers vulnerability scanning, penetration testing, security policy review, compliance evaluation, and risk assessment. We provide detailed reports with actionable recommendations to strengthen your security posture.",
        category: "Cybersecurity"
    },
    {
        question: "How often should we conduct cybersecurity assessments?",
        answer: "We recommend annual comprehensive assessments, with quarterly security reviews for high-risk environments. Additionally, assessments should be conducted after major system changes, new deployments, or when compliance requirements change.",
        category: "Cybersecurity"
    },
    {
        question: "Do you help with compliance requirements like GDPR or ISO 27001?",
        answer: "Yes, we assist with various compliance frameworks including GDPR, ISO 27001, SOC 2, and industry-specific regulations. We help you understand requirements, implement necessary controls, and prepare for audits and certifications.",
        category: "Cybersecurity"
    },
    
    // Pricing & Process
    {
        question: "How do you structure your pricing?",
        answer: "Our pricing is transparent and project-based, tailored to the scope and complexity of your needs. We provide detailed proposals with clear deliverables and timelines. For ongoing services, we offer flexible engagement models including retainer and project-based arrangements.",
        category: "Pricing & Process"
    },
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on scope and complexity. Small projects might take 2-4 weeks, while larger enterprise solutions can take 3-6 months. We provide detailed project plans with milestones and regular progress updates throughout the engagement.",
        category: "Pricing & Process"
    },
    {
        question: "Do you offer remote services or do you need to be on-site?",
        answer: "We offer both remote and on-site services. Most of our work can be done remotely using modern collaboration tools, but we're happy to work on-site when required for specific phases of projects or for training and implementation support.",
        category: "Pricing & Process"
    }
];

const FAQItem = ({ item, isOpen, toggle, isLast }: { item: FAQItem; isOpen: boolean; toggle: () => void; isLast?: boolean }) => (
    <div className={`border-b ${isLast ? 'border-b-0' : 'border-gray-200'}`}>
        <button
            className="w-full py-6 px-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={toggle}
        >
            <h3 className="text-lg font-semibold text-gray-900 pr-6 leading-relaxed">{item.question}</h3>
            {isOpen ? (
                <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
            ) : (
                <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
            )}
        </button>
        {isOpen && (
            <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
        )}
    </div>
);

const FAQ = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const categories = ["All", ...Array.from(new Set(faqData.map(item => item.category)))];
    const filteredFAQs = activeCategory === "All" 
        ? faqData 
        : faqData.filter(item => item.category === activeCategory);

    const toggleItem = (index: number) => {
        setOpenItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="container mx-auto px-4 max-w-4xl">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeCategory === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* FAQ Items */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {filteredFAQs.map((item, index) => (
                    <FAQItem
                        key={index}
                        item={item}
                        isOpen={openItems.includes(index)}
                        toggle={() => toggleItem(index)}
                        isLast={index === filteredFAQs.length - 1}
                    />
                ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Still have questions?
                </h3>
                <p className="text-gray-600 mb-6">
                    Can't find what you're looking for? Our team is here to help.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default FAQ; 