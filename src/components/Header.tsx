"use client";

import { sendGAEvent } from '@next/third-parties/google';
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    // { name: "SHOWCASE", href: "/showcase" },
    { name: "CONTACT US", href: "/contact" },
]


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-5 flex justify-center items-center">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-14">

                    {navItems.map((item) => (
                        <Link
                            key={ item.href }
                            href={ item.href }
                            onClick={() => sendGAEvent('event', 'button_clicked', {
                                event_category: 'Navigation',
                                event_label: item.name,
                                value: item.name
                            })}
                            className={`relative text-gray-900 font-normal transition-all duration-200 ease-in-out hover:text-blue-800 ${
                                pathname === item.href ? "font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-1 after:bg-blue-800" : ""
                            }`}
                        >
                            { item.name }
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden absolute right-4 text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="md:hidden bg-white border-t shadow-md">
                    <div className="flex flex-col items-center py-6 space-y-5">
                        {navItems.map((item) => (
                            <Link
                                key={ item.href }
                                href={ item.href }
                                onClick={() => sendGAEvent('event', 'button_clicked', {
                                    event_category: 'Navigation',
                                    event_label: item.name,
                                    value: item.name
                                })}
                                className={`relative text-gray-700 font-bold text-lg transition-all duration-200 ease-in-out hover:text-blue-800 ${
                                    pathname === item.href ? "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-1 after:bg-blue-800" : ""
                                }`}
                            >
                                { item.name }
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
