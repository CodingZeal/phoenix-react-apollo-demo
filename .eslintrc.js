const path = require('path')

module.exports = {
  extends: [
    'zeal',
    'zeal/react'
  ],
  globals: {
    SyntheticInputEvent: false
  },
  root: true,
  rules: {
    'react/no-unused-prop-types': 'off'
  },
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
