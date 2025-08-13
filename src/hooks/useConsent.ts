import { useState, useEffect } from 'react';

export interface ConsentSettings {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
}

export const useConsent = () => {
    const [consent, setConsent] = useState<ConsentSettings | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Load consent from localStorage on mount
    useEffect(() => {
        const savedConsent = localStorage.getItem('cidit-consent');
        if (savedConsent) {
            try {
                const parsedConsent = JSON.parse(savedConsent);
                setConsent(parsedConsent);
            } catch (error) {
                console.error('Error parsing saved consent:', error);
                // If there's an error, show the modal again
                setIsModalOpen(true);
            }
        } else {
            // No consent saved, show modal
            setIsModalOpen(true);
        }
    }, []);

    const saveConsent = (newConsent: ConsentSettings) => {
        setConsent(newConsent);
        localStorage.setItem('cidit-consent', JSON.stringify(newConsent));
        setIsModalOpen(false);
    };

    const updateConsent = (newConsent: ConsentSettings) => {
        saveConsent(newConsent);
    };

    const resetConsent = () => {
        localStorage.removeItem('cidit-consent');
        setConsent(null);
        setIsModalOpen(true);
    };

    const hasConsent = (type: keyof ConsentSettings): boolean => {
        return consent?.[type] ?? false;
    };

    const openConsentModal = () => {
        setIsModalOpen(true);
    };

    const closeConsentModal = () => {
        setIsModalOpen(false);
    };

    return {
        consent,
        isModalOpen,
        saveConsent,
        updateConsent,
        resetConsent,
        hasConsent,
        openConsentModal,
        closeConsentModal
    };
}; 