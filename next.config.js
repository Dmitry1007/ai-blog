/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tailwindui.com",
                port: "",
                pathname: "/img/logos/**",
            },
        ],
    },
    // images: {
    //     domains: ["tailwindui.com"],
    // },
};

module.exports = nextConfig;
