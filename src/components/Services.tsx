import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
    return (
        <section className="w-full py-16 flex items-center justify-center bg-muted/10">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Our Service Offerings
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Explore our wide range of IT services designed to drive innovation and efficiency for your business.
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto px-4">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        link={service.link}
                        reverse={index % 2 === 1}
                    />
                    ))}
                </div>
            </div>
        </section>
    )
}
