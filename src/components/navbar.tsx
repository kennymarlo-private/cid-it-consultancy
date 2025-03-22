"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check localStorage for dark mode setting
        const isDark = localStorage.getItem("theme") === "dark";
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                    CID IT Consultancy
                </Link>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link href="/" className="text-gray-800 dark:text-white hover:text-blue-500">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-500">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="text-gray-800 dark:text-white hover:text-blue-500">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-500">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Dark Mode Toggle */}
                <button onClick={toggleDarkMode} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
                    {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-900" />}
                </button>
            </div>
        </nav>
    );
}
