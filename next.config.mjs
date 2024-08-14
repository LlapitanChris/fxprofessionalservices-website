/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
		  {
			source: '/blogs',
			destination: '/',
			permanent: true,
		  },
		  {
			source: '/products',
			destination: '/',
			permanent: true,
		  },
		]
	  },
};

export default nextConfig;
