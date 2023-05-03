module.exports = {
  seo: {
    title: 'Bosch GmbH',
    description: 'POC for Bosch GmbH on FastStore',
    titleTemplate: '%s | FastStore',
    author: 'Quality Digital',
  },

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'bshgermany',
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
  },

  // Default session
  session: {
    currency: {
      code: 'EUR',
      symbol: '€',
    },
    locale: 'en-US',
    channel: '{"salesChannel":"2","regionId":""}',
    country: 'DEU',
    postalCode: null,
    person: null,
  },

  // Production URLs
  storeUrl: 'https://vtexfaststore.com',
  secureSubdomain: 'https://secure.vtexfaststore.com',
  checkoutUrl: 'https://secure.vtexfaststore.com/checkout',
  loginUrl: 'https://secure.vtexfaststore.com/api/io/login',
  accountUrl: 'https://secure.vtexfaststore.com/api/io/account',

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: '/MUM9A66R00/p',
      collection: '/home-appliances',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/MUM9A66R00/p',
      collection: '/home-appliances',
      collection_filtered: '/home-appliances/bosch?map=c,brand',
      search: '/s?q=kitchen',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-PGHZ95N',
  },
}
