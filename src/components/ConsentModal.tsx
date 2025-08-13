"use client";

import { useState, useEffect } from 'react';
import { X, Shield, Cookie, BarChart3, Mail, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConsentModalProps {
    isOpen: boolean;
    onAccept: (consents: ConsentSettings) => void;
    onDecline: () => void;
}

interface ConsentSettings {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ isOpen, onAccept, onDecline }) => {
    const [consents, setConsents] = useState<ConsentSettings>({
        necessary: true, // Always true, cannot be disabled
        analytics: false,
        marketing: false,
        functional: false
    });

    const [showDetails, setShowDetails] = useState(false);

    // Check if consent was already given
    useEffect(() => {
        const savedConsent = localStorage.getItem('cidit-consent');
        if (savedConsent) {
            const parsedConsent = JSON.parse(savedConsent);
            setConsents(parsedConsent);
        }
    }, []);

    const handleAcceptAll = () => {
        const allConsents = {
            necessary: true,
            analytics: true,
            marketing: true,
            functional: true
        };
        setConsents(allConsents);
        onAccept(allConsents);
    };

    const handleAcceptSelected = () => {
        onAccept(consents);
    };

    const handleDecline = () => {
        // Only accept necessary cookies
        const minimalConsents = {
            necessary: true,
            analytics: false,
            marketing: false,
            functional: false
        };
        onAccept(minimalConsents);
    };

    const toggleConsent = (type: keyof ConsentSettings) => {
        if (type === 'necessary') return; // Cannot disable necessary cookies
        setConsents(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <Shield className="w-6 h-6 text-blue-600" />
                        <h2 className="text-xl font-bold text-gray-900">Privacy & Cookie Consent</h2>
                    </div>
                    <button
                        onClick={onDecline}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="mb-6">
                        <p className="text-gray-600 mb-4">
                            Welcome to CID IT Consultancy! We respect your privacy and are committed to protecting your personal data 
                            in compliance with Republic Act No. 10173 (Data Privacy Act of 2012).
                        </p>
                        <p className="text-gray-600">
                            This website uses cookies and similar technologies to enhance your experience. Please review and select your preferences below.
                        </p>
                    </div>

                    {/* Consent Categories */}
                    <div className="space-y-4 mb-6">
                        {/* Necessary Cookies */}
                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                            <div className="flex-shrink-0 mt-1">
                                <input
                                    type="checkbox"
                                    checked={consents.necessary}
                                    disabled
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Shield className="w-4 h-4 text-green-600" />
                                    <h3 className="font-semibold text-gray-900">Necessary Cookies</h3>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Always Active</span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Essential for the website to function properly. These cannot be disabled and include security, 
                                    session management, and basic functionality.
                                </p>
                            </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                            <div className="flex-shrink-0 mt-1">
                                <input
                                    type="checkbox"
                                    checked={consents.analytics}
                                    onChange={() => toggleConsent('analytics')}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                    <BarChart3 className="w-4 h-4 text-blue-600" />
                                    <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Help us understand how visitors interact with our website by collecting and reporting information anonymously. 
                                    This includes Google Analytics and similar tools.
                                </p>
                            </div>
                        </div>

                        {/* Functional Cookies */}
                        <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                            <div className="flex-shrink-0 mt-1">
                                <input
                                    type="checkbox"
                                    checked={consents.functional}
                                    onChange={() => toggleConsent('functional')}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Cookie className="w-4 h-4 text-purple-600" />
                                    <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Enable enhanced functionality and personalization, such as remembering your preferences and settings.
                                </p>
                            </div>
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                            <div className="flex-shrink-0 mt-1">
                                <input
                                    type="checkbox"
                                    checked={consents.marketing}
                                    onChange={() => toggleConsent('marketing')}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Mail className="w-4 h-4 text-red-600" />
                                    <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Used to track visitors across websites to display relevant and engaging advertisements. 
                                    This includes social media pixels and advertising networks.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Data Collection Notice */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-6">
                        <div className="flex items-start space-x-2">
                            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-blue-900 mb-1">Data Collection Notice</h4>
                                <p className="text-sm text-blue-800">
                                    By accepting these cookies, you consent to the collection and processing of your personal data 
                                    as described in our <a href="/privacy-policy" className="underline hover:text-blue-600">Privacy Policy</a>. 
                                    You can withdraw your consent at any time by contacting us.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                            onClick={handleAcceptAll}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            <Check className="w-4 h-4 mr-2" />
                            Accept All
                        </Button>
                        <Button
                            onClick={handleAcceptSelected}
                            variant="outline"
                            className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                        >
                            Accept Selected
                        </Button>
                        <Button
                            onClick={handleDecline}
                            variant="outline"
                            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                            Decline All
                        </Button>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <a href="/privacy-policy" className="hover:text-blue-600 underline">
                                Privacy Policy
                            </a>
                            <a href="/terms-of-service" className="hover:text-blue-600 underline">
                                Terms of Service
                            </a>
                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="hover:text-blue-600 underline"
                            >
                                {showDetails ? 'Hide Details' : 'Show Details'}
                            </button>
                        </div>
                    </div>

                    {/* Detailed Information */}
                    {showDetails && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-3">Detailed Cookie Information</h4>
                            <div className="space-y-3 text-sm text-gray-600">
                                <div>
                                    <strong>Necessary Cookies:</strong> Session management, security tokens, CSRF protection
                                </div>
                                <div>
                                    <strong>Analytics Cookies:</strong> Google Analytics (_ga, _gid, _gat), page views, user behavior
                                </div>
                                <div>
                                    <strong>Functional Cookies:</strong> Language preferences, theme settings, form data
                                </div>
                                <div>
                                    <strong>Marketing Cookies:</strong> Facebook Pixel, Google Ads, LinkedIn Insight Tag
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConsentModal; 