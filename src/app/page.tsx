import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import AboutPreview from "@/components/AboutPreview";
import Services from "@/components/Services";

export default function Home() {
    return (
        <div className="space-y-0">
            {/* Hero Section */}
            <Hero
                title={"CID IT CONSULTANCY"}
                subtitle={"Where Innovation Meets Impact"}
                ctaText={"Contact Us"}
                ctaLink={"/contact"}
                imageUrl={"/consultancy.jpg"} />

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

            <section className="bg-gray-100">
                {/*<h2 className="text-3xl font-semibold text-center">Our Services</h2>*/}
                <Services />
            </section>

            <section className="bg-white">
                <AboutPreview />
            </section>

            {/*/!* About Us *!/*/}
            {/*<section className="py-20 bg-white">*/}
            {/*    <h2 className="text-3xl font-semibold text-center">About Us</h2>*/}
            {/*</section>*/}

            {/* Services */}


            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <h2 className="text-3xl font-semibold text-center">Why Choose Us</h2>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-100">
                <h2 className="text-3xl font-semibold text-center">Testimonials</h2>
            </section>

            {/* Call-to-Action */}
            <section className="py-20 bg-blue-600 text-white text-center">
                <h2 className="text-3xl font-semibold">Call-to-Action</h2>
            </section>

            {/* Blog Section (Optional) */}
            <section className="py-20 bg-white">
                <h2 className="text-3xl font-semibold text-center">Latest Blog Posts</h2>
            </section>

        </div>
    );
}
