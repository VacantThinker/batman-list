const env = require('./env-config')

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
        }
      }
    ]
  ],
  plugins: [['transform-define', env]]
}
