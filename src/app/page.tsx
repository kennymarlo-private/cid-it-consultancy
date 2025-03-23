import Hero from '@/components/Hero';

export default function Home() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <Hero
                title={"CID IT CONSULTANCY"}
                subtitle={"Where Innovation Meets Impact"}
                imageUrl={"/consultancy.jpg"} />

            {/* About Us */}
            <section className="py-20 bg-white">
                <h2 className="text-3xl font-semibold text-center">About Us</h2>
            </section>

            {/* Services */}
            <section className="py-20 bg-gray-100">
                <h2 className="text-3xl font-semibold text-center">Our Services</h2>
            </section>

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

            {/* Contact / Footer */}
            <footer className="py-10 bg-gray-900 text-white text-center">
                <h2 className="text-xl">Contact Information</h2>
            </footer>
        </div>
    );
}
