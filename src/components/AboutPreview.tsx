import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPreview() {
    return (
        <section className="w-full py-16 flex items-center justify-center bg-muted/10">
            <div className="container">
                <div className="flex flex-col items-center justify-center space-y-10 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Where Innovation Meets Impact
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            CID IT Consultancy helps organizations reimagine what’s possible through technology.
                            We specialize in creating efficient, scalable, and impactful IT solutions designed for real-world needs.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <Button asChild size="lg" className="w-full">
                            <Link href="/about">Learn More About Us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
