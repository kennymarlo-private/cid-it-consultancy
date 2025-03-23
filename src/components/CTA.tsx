import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTAProps {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export default function CTA({
                                title = "Ready to get started?",
                                description = "Join thousands of satisfied customers using our platform today.",
                                buttonText = "Get Started",
                                buttonLink = "/signup",
                                variant = "default",
                            }: CTAProps) {
    return (
        <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{description}</p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <Button asChild size="lg" className="w-full" variant={variant}>
                            <Link href={buttonLink}>{buttonText}</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

