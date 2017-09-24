const WooCommerceAPI = require('woocommerce-api')

const WooCommerce = new WooCommerceAPI({
  url: 'https://ensdomains.market',
  consumerKey: 'ck_0eb3be21dea7c971785901b032bc476a09b6cf0e',
  consumerSecret: 'cs_186e47d3b3c1704b9a3d08ccef9857057e8ac896',
  wpAPI: true,
  verifySsl: true,
  version: 'wc/v2'
})

export default WooCommerce
