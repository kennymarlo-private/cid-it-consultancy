import { Button } from "@/components/ui/button"

const services = [
    {
        id: 1,
        title: "Consulting",
        description: "We offer consultancy services to clients, our expertise is in software development, Magnolia CMS, and cybersecurity.",
        image: "/images/consulting.png", // Replace with an actual image path
        link: "/services/consulting",
    },
    {
        id: 2,
        title: "System Integration",
        description: "We specialize in integrating disparate systems, enabling seamless data flow and automation across your business processes for greater efficiency and reliability.",
        image: "/images/system-integration.png", // Replace with an actual image path
        link: "/services/system-integration",
    },
    {
        id: 3,
        title: "Software Development",
        description: "Our software solutions are tailored to meet your unique business needs, ensuring long-term efficiency and success.",
        image: "/images/software-development.png",
        link: "/services/software-development",
    },
    {
        id: 4,
        title: "Cybersecurity Solutions",
        description: "Protect your business with our cybersecurity solutions designed to safeguard your digital assets and minimize risks.",
        image: "/images/cybersecurity.png",
        link: "/services/cybersecurity",
    },
    // You can add more service items here.
]

export default function Services() {
    return (
        <section className="w-full py-16 flex items-center justify-center bg-muted/10">
            <div className="container">
                <div className="text-center space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Our Service Offerings
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Explore our wide range of IT services designed to drive innovation and efficiency for your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col max-w-[700px]">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4 flex-grow text-justify leading-relaxed">{service.description}</p>
                            <Button asChild size="lg" className="w-full mt-auto">
                                <a href={service.link}>Learn More</a>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
