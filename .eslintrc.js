const path = require('path')

module.exports = {
  extends: [
    'zeal',
    'zeal/react'
  ],
  root: true,
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            root: path.resolve(__dirname, 'client')
          }
        }
      }
    }
  }
}
