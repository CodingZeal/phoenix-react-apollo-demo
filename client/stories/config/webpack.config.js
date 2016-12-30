const path = require('path')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules!sass'
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, '../../')
  }
}
