const env = require('./env-config')

module.exports = {
  "presets": [
    [
      "next/babel",
      {
        "preset-env": {
          "modules": "commonjs"
        }
      }
    ]
  ],
  "plugins": [
    [
      "transform-define",
      env
    ]
  ]
}
