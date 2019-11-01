const production = process.env.NODE_ENV === 'production'
const hostUrl = '/batman-list'

module.exports = {
  assetPrefix: production ? `${hostUrl}` : '',
  publicRuntimeConfig: {
    linkPrefix: production ? `${hostUrl}` : ''
  }
}


// module.exports = {
//   exportsPathMap: function () {
//     return {
//       '/': {page : '/'}
//     }
//   }
// }
