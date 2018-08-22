module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/cnode-vue/dist/'
    : '/',
};
