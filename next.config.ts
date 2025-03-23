import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline' 'unsafe-eval' fonts.googleapis.com;
    img-src 'self' blob: data:;
    font-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.gstatic.com;
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
