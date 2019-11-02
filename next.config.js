const { backend_url } = require('./env.config')

module.exports = {
  exportPathMap: function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }

    const shows = [
      { id: 975, name: 'Batman' },
      { id: 481, name: 'The Batman' },
      { id: 504, name: 'Batman Beyond' },
      { id: 757, name: 'Batman: The Animated Series' },
      { id: 3557, name: 'Beware the Batman' },
      { id: 11464, name: 'Batman Unlimited' },
      { id: 900, name: 'Batman: The Brave and the Bold' },
      { id: 22309, name: 'Batman: Black and White' },
      { id: 5951, name: 'The New Batman Adventures' },
      { id: 33618, name: 'The Adventures of Batman' }
    ]
    const dirName = '/show/'
    const p_id = '[id]'

    shows.map(show => {
      // '/show/33618': { page: '/show/33618' }
      const id = show.id
      const pageUrl = `${dirName}${id}`
      paths[pageUrl] = { page: pageUrl }
    })

    return paths
  },
  // target: 'serverless',
  assetPrefix: backend_url
  // env: {
  //   linkPrefix: production ? `${backend_url}` : ''
  // }
  // webpack: (config, { defaultLoaders }) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: [
  //       defaultLoaders.babel,
  //       {
  //         loader: require('styled-jsx/webpack').loader,
  //         options: {
  //           type: 'scoped'
  //         }
  //       }
  //     ]
  //   });
  //
  //   return config;
  // }
  //
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.md$/,
  //     use: 'raw-loader'
  //   });
  //
  //   return config;
  // }
}

// module.exports = {
//   exportsPathMap: function () {
//     return {
//       '/': {page : '/'}
//     }
//   }
// }
