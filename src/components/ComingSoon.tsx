import { Calendar, Clock, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ComingSoonProps {
    title?: string;
    description?: string;
    expectedDate?: string;
    showContactButton?: boolean;
    contactButtonText?: string;
    contactButtonLink?: string;
    icon?: 'calendar' | 'clock' | 'construction';
    background?: 'gradient' | 'white';
}

const ComingSoon: React.FC<ComingSoonProps> = ({
    title = "Coming Soon",
    description = "We're working hard to bring you something amazing. Stay tuned for updates!",
    expectedDate,
    showContactButton = true,
    contactButtonText = "Contact Us",
    contactButtonLink = "/contact",
    icon = 'construction',
    background = 'gradient'
}) => {
    const getIcon = () => {
        switch (icon) {
            case 'calendar':
                return <Calendar className="w-16 h-16 text-blue-600" />;
            case 'clock':
                return <Clock className="w-16 h-16 text-blue-600" />;
            case 'construction':
            default:
                return <Construction className="w-16 h-16 text-blue-600" />;
        }
    };

    const getBackgroundClasses = () => {
        return background === 'white' 
            ? 'min-h-[60vh] flex items-center justify-center bg-white' 
            : 'min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100';
    };

    const getTextClasses = () => {
        return background === 'white' 
            ? {
                title: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6',
                description: 'text-xl text-gray-600 mb-8 leading-relaxed',
                dateContainer: 'bg-gray-50 rounded-lg p-6 mb-8 shadow-sm border border-gray-200',
                dateText: 'text-gray-700',
                additionalInfo: 'text-sm text-gray-500'
            }
            : {
                title: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6',
                description: 'text-xl text-gray-600 mb-8 leading-relaxed',
                dateContainer: 'bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200',
                dateText: 'text-gray-700',
                additionalInfo: 'text-sm text-gray-500'
            };
    };

    const textClasses = getTextClasses();

    return (
        <div className={getBackgroundClasses()}>
            <div className="max-w-2xl mx-auto text-center px-6 py-16">
                {/* Icon */}
                <div className="flex justify-center mb-8">
                    {getIcon()}
                </div>

                {/* Title */}
                <h1 className={textClasses.title}>
                    {title}
                </h1>

                {/* Description */}
                <p className={textClasses.description}>
                    {description}
                </p>

                {/* Expected Date */}
                {expectedDate && (
                    <div className={textClasses.dateContainer}>
                        <div className="flex items-center justify-center space-x-2">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <span className="font-medium">Expected Launch:</span>
                            <span className="text-blue-600 font-semibold">{expectedDate}</span>
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {showContactButton && (
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                            <Link href={contactButtonLink}>
                                {contactButtonText}
                            </Link>
                        </Button>
                    )}
                    
                    <Button 
                        asChild 
                        variant="outline" 
                        size="lg"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                        <Link href="/">
                            Back to Home
                        </Link>
                    </Button>
                </div>

                {/* Additional Info */}
                <div className={`mt-12 ${textClasses.additionalInfo}`}>
                    <p>Want to be notified when this feature launches?</p>
                    <p className="mt-1">
                        <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                            Get in touch with us
                        </Link>
                        {' '}and we'll keep you updated!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon; 