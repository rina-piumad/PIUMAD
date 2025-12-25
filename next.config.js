/** @type {import('next').NextConfig} */
const nextConfig = {
    // 이미지 최적화 설정
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
};

module.exports = nextConfig;
