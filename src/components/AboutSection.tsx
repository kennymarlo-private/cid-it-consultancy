import { FaLightbulb, FaHandshake, FaUsers, FaRocket } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
    return (
        <section className="w-full py-16 pb-32 bg-background text-center">
            <div className="max-w-7xl mx-auto px-4 space-y-16">
                {/* Overview */}
                <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About CID IT Consultancy</h2>
                    <p className="text-muted-foreground text-lg">
                        CID IT Consultancy is a forward-thinking technology company dedicated to delivering innovative and impactful software solutions. We specialize in IT consulting, custom software development, and digital transformation strategies that help businesses stay competitive in a rapidly evolving tech landscape.
                    </p>
                </div>

                {/* Mission */}
                <div className="space-y-4 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-semibold">Our Mission</h3>
                    <p className="text-muted-foreground text-base">
                        To empower organizations through smart, scalable, and efficient technology. We aim to bridge creativity and technical excellence to deliver solutions that don’t just solve problems — they create lasting value.
                    </p>
                </div>

                {/* What Sets Us Apart */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold">What Sets Us Apart</h3>
                    <ul className="grid gap-2 text-muted-foreground list-disc list-inside text-left">
                        <li>Deep commitment to client success</li>
                        <li>Agile and adaptable to your business needs</li>
                        <li>Local roots, global mindset</li>
                        <li>Transparent and collaborative process</li>
                        <li>Long-term partnerships over one-time transactions</li>
                    </ul>
                </div>

                {/* Core Values */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold">Our Core Values</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center space-y-2">
                            <FaLightbulb className="text-4xl text-primary" />
                            <h4 className="font-semibold">Innovation</h4>
                            <p className="text-sm text-muted-foreground text-center">We embrace creativity and technology to drive progress.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <FaHandshake className="text-4xl text-primary" />
                            <h4 className="font-semibold">Integrity</h4>
                            <p className="text-sm text-muted-foreground text-center">We operate with honesty, transparency, and ethical standards.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <FaUsers className="text-4xl text-primary" />
                            <h4 className="font-semibold">Collaboration</h4>
                            <p className="text-sm text-muted-foreground text-center">We believe in co-creating solutions with our clients.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <FaRocket className="text-4xl text-primary" />
                            <h4 className="font-semibold">Impact</h4>
                            <p className="text-sm text-muted-foreground text-center">We focus on real outcomes, not just deliverables.</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="pt-12 pb-24">
                    <Button asChild size="lg">
                        <Link href="/contact">Work with Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
