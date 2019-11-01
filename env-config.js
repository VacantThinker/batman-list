const isProduction = process.env.NODE_ENV === 'production';
// const host = '/batman-list';
const host = '';

module.exports = {
  'process.env.linkPrefix': isProduction ? host: ''
}
