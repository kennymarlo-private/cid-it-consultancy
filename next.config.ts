import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self' *.googletagmanager.com *.gstatic.com *.google-analytics.com;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.gstatic.com *.google-analytics.com;;
    style-src 'self' 'unsafe-inline' 'unsafe-eval' fonts.googleapis.com;
    img-src 'self' blob: data:;
    font-src 'self' 'unsafe-inline' 'unsafe-eval' *.gstatic.com;
    object-src 'none';
    base-uri 'self';
    connect-src 'self';
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
