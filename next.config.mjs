/** @type {import('next').NextConfig} */


const nextConfig = {
    // output : 'export' ,
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
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/sitemap.xml',
            },
        ];
    },
};

export default nextConfig;
