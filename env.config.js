const isProduction = process.env.NODE_ENV === 'production'
const hostUrl = '/batman-list'
// const backend_url = isProduction ? hostUrl: '';
const backend_url = ''

module.exports = {
  'process.env.linkPrefix': backend_url,
  backend_url
}
