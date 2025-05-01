import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import AboutPreview from "@/components/AboutPreview";
import Services from "@/components/Services";
import React from "react";

export default function Home() {
    return (
            <div className="space-y-0">
                {/* Hero Section */}
                <Hero
                    title={"CID IT CONSULTANCY"}
                    subtitle={"Where Innovation Meets Impact"}
                    ctaText={"Contact Us"}
                    ctaLink={"/contact"}
                    imageUrl={"/consultancy.jpg"}/>

                <section className="bg-white">
                    <CTA
                        title="Ready to Work Smarter? Let's Create What's Next."
                        description="CID IT Consultancy blends creativity and technology to deliver custom solutions that don’t just work — they lead. Whether you're modernizing systems or building from scratch, we're here to make innovation tangible."
                        buttonText="Talk to Our Team"
                        buttonLink="/contact"
                        buttonSubtext="Response within 24 hours — no commitment required"
                        variant="default"/>
                </section>

                <section className="bg-gray-100">
                    {/*<h2 className="text-3xl font-semibold text-center">Our Services</h2>*/}
                    <Services/>
                </section>

                <section className="bg-white px-4 sm:px-6 md:px-8">
                    <AboutPreview/>
                </section>
            </div>

    );
}
