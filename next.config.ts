import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
        // Enable SCSS Modules
        modules: {
            localIdentName: '[local]_[hash:base64:5]', // Optional: Customize your CSS module class names
        },
    },
    webpack(config, { isServer }) {
        // You can add custom Webpack configurations here if needed
        return config;
    },
};

export default nextConfig;
