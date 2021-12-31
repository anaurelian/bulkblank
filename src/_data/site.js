const isProduction = process.env.ELEVENTY_ENV == 'production';

module.exports = {
  url: isProduction ? 'https://bulkblank.anaurelian.com' : 'http://localhost:8080',
  imagesUrl: '/img',
  buildYear: new Date().getFullYear(),
  isProduction,
};