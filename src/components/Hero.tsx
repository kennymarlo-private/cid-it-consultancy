import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";

interface HeroProps {
    title: string;
    subtitle?: string;
    imageUrl: string;
    ctaText?: string;
    ctaLink?: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, ctaText, ctaLink, variant }) => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center text-center text-white">
            {/* Background Image */}
            <Image
                src={imageUrl}
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 -z-10"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 p-8">
                <h1 className="text-6xl tracking-widest md:text-7xl font-extrabold mb-4 drop-shadow-lg">{title}</h1>
                {subtitle && <p className="text-2xl tracking-wide md:text-4xl mb-4 drop-shadow-md">{subtitle}</p>}

                <Button asChild size="lg" className="opacity-80" variant={variant}>
                    {ctaText && ctaLink && (
                        <Link href={ctaLink}>{ctaText}</Link>
                    )}
                </Button>
            </div>
        </div>
    );
};

export default Hero;
