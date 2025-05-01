import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
    title?: string;
    subtitle?: string;
    imageUrl: string;
    ctaText?: string;
    ctaLink?: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, ctaText, ctaLink, variant = "default" }) => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image */}
            <Image
                src={imageUrl}
                alt="Hero Background"
                fill
                className="absolute inset-0 object-cover -z-10"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 p-4 max-w-3xl flex flex-col items-center">
                {title && (
                <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold mb-4 drop-shadow-lg">
                    {title}
                </h1>
                )}
                {subtitle && (
                    <p className="text-lg sm:text-xl md:text-2xl mb-6 drop-shadow-md">
                        {subtitle}
                    </p>
                )}

                {ctaText && ctaLink && (
                    <Button asChild size="lg" className="opacity-90">
                        <Link href={ctaLink}>{ctaText}</Link>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Hero;
