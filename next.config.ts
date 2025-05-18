/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fwqvagssmwnwnpjppljc.supabase.co'], // HARUS sama persis kayak error tadi
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
