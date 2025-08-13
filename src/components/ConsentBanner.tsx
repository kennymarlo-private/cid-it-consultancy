"use client";

import { useState } from 'react';
import { Settings, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useConsent } from '@/hooks/useConsent';

const ConsentBanner = () => {
    const { consent, openConsentModal, resetConsent } = useConsent();
    const [isVisible, setIsVisible] = useState(true);

    if (!consent || !isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <div className="text-sm text-gray-600">
                            <span className="font-medium">Cookie Settings:</span>
                            <span className="ml-2">
                                {consent.analytics ? 'Analytics' : 'No Analytics'}, 
                                {consent.marketing ? ' Marketing' : ' No Marketing'}, 
                                {consent.functional ? ' Functional' : ' No Functional'}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            onClick={openConsentModal}
                            variant="outline"
                            size="sm"
                            className="text-xs"
                        >
                            <Settings className="w-3 h-3 mr-1" />
                            Manage
                        </Button>
                        <Button
                            onClick={() => setIsVisible(false)}
                            variant="ghost"
                            size="sm"
                            className="text-xs text-gray-500 hover:text-gray-700"
                        >
                            Dismiss
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsentBanner; 