/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Temporary: points at the images already living on b3llacha.com (Framer)
    // so the new site can launch with real imagery on day one. Swap these
    // for locally hosted files in /public whenever you have time — see
    // lib/projects.ts and the hero image in app/page.tsx.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;
