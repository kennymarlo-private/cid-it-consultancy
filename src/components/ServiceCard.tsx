import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    reverse?: boolean; // ← new prop to control layout direction
}

export default function ServiceCard({ title, description, image, link, reverse = false }: ServiceCardProps) {
    return (
        <section
            className={`flex flex-col ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8 py-12`}
        >
            {/* Image */}
            <div className="md:w-1/2">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            {/* Content */}
            <div className="md:w-1/2 text-left px-4">
                <h3 className="text-2xl font-bold mb-4 text-center md:text-left">{title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-justify">{description}</p>
                <Button asChild>
                    <Link href={link}>Learn More</Link>
                </Button>
            </div>
        </section>
    );
}
