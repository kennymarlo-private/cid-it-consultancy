import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
    items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="breadcrumb flex overflow-x-auto whitespace-nowrap text-gray-500 text-sm py-2">
            <ol className="flex items-center space-x-1 sm:space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {item.href ? (
                            <Link href={item.href} className="hover:underline hover:text-blue-600 truncate max-w-[120px] sm:max-w-none">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="font-medium text-gray-900 truncate max-w-[120px] sm:max-w-none">{item.label}</span>
                        )}
                        {index < items.length - 1 && (
                            <ChevronRight className="w-4 h-4 mx-1 text-gray-300" />
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
