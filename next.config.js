/** @type {import('next').NextConfig} */
const nextConfig = {
    // 같은 와이파이에서 접속 허용 (192.168.x.x 전체)
    allowedDevOrigins: ['http://192.168.*', 'http://localhost'],

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
