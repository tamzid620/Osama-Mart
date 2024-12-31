/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, 
        domains: [
          'm.media-amazon.com' ,
          'www.lego.com',
          'cdn.shopify.com',
          '1.bp.blogspot.com',
          'i5.walmartimages.ca',
          'cdn.ecommercedns.uk'
        ],
      }, 
};

export default nextConfig;
