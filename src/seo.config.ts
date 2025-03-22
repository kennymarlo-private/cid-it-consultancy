import { DefaultSeoProps } from 'next-seo';

const SEOConfig: DefaultSeoProps = {
    title: 'CID IT Consultancy',
    description: 'Providing innovative IT solutions for businesses.',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ciditconsultancy.com',
        siteName: 'CID IT Consultancy',
        images: [
            {
                url: 'https://ciditconsultancy.com/public/logo.png',
                width: 1200,
                height: 630,
                alt: 'CID IT Consultancy Logo',
            },
        ],
    },
    twitter: {
        handle: '@yourhandle', // Replace with your Twitter handle
        site: '@yourhandle',
        cardType: 'summary_large_image',
    },
};

export default SEOConfig;
