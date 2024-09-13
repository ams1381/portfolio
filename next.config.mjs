/** @type {import('next').NextConfig} */


const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: [
                'raw-loader',
                'glslify-loader'
            ],
        });

        return config;
    },
    theme: {
        extend: {},
    },
    darkMode: "class",
};

export default nextConfig;
