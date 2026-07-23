/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site deploys to GitHub Pages / any static host.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
