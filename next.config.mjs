import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
});

const nextConfig = {
  reactStrictMode: true
};

export default withNextIntl(nextConfig);
