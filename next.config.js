const production = process.env.NODE_ENV === 'production';
// const hostUrl = '/batman-list';
const hostUrl = '';

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/show/975': { page: '/show/975' },
      '/show/481': { page: '/show/481' },
      '/show/504': { page: '/show/504' },
      '/show/757': { page: '/show/757' },
      '/show/3557': { page: '/show/3557' },
      '/show/11464': { page: '/show/11464' },
      '/show/900': { page: '/show/900' },
      '/show/22309': { page: '/show/22309' },
      '/show/5951': { page: '/show/5951' },
      '/show/33618': { page: '/show/33618' }
    };
  },
  assetPrefix: production ? `${hostUrl}` : '',
  env: {
    linkPrefix: production ? `${hostUrl}` : ''
  }
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.md$/,
  //     use: 'raw-loader'
  //   });
  //
  //   return config;
  // }
};

// module.exports = {
//   exportsPathMap: function () {
//     return {
//       '/': {page : '/'}
//     }
//   }
// }
