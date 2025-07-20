import type {NextConfig} from 'next';

// IMPORTANT: You must replace 'your-repo-name' with the name of your GitHub repository.
// For example, if your repository is https://github.com/user/my-portfolio,
// then the basePath should be '/my-portfolio'.
const repoName = 'your-repo-name';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
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
