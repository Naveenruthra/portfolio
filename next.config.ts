import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // IMPORTANT: For GitHub Pages deployment, you must uncomment the following two lines
  // and replace 'your-repo-name' with the name of your GitHub repository.
  // For example, if your repository is https://github.com/user/my-portfolio,
  // then basePath should be '/my-portfolio'.
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestudio.ai',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
