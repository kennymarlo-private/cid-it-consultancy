import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googletagmanager.com;
    style-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://*.google-analytics.com https://*.googletagmanager.com;
    font-src 'self' 'unsafe-eval' https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://google.com https://www.google.com;
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig: NextConfig = {
    headers: async () => [
        {
            source: "/(.*)",
            headers: [
                {
                    key: "Content-Security-Policy",
                    value: cspHeader.replace(/\n/g, ''),
                }
            ],
        },
    ],
};

export default nextConfig;
