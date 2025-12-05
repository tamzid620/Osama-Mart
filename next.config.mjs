/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "www.lego.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "1.bp.blogspot.com",
      },
      {
        protocol: "https",
        hostname: "i5.walmartimages.ca",
      },
      {
        protocol: "https",
        hostname: "cdn.ecommercedns.uk",
      },
    ],
  },
};

export default nextConfig;
