import Image from "next/image";
import React from "react";

interface HeroProps {
    title: string;
    subtitle?: string;
    imageUrl: string;
    ctaText?: string;
    ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, ctaText, ctaLink }) => {
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
                {ctaText && ctaLink && (
                    <a
                        href={ctaLink}
                        className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 inline-flex mt-8"
                    >
                        {ctaText}
                    </a>
                )}
            </div>
        </div>
    );
};

export default Hero;
