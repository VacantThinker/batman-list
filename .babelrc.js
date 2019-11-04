const env = require('./env.config')

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          modules: 'cjs'
        }
      }
    ]
  ],
  plugins: [['transform-define', env]]
}
