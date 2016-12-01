module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css?modules!sass'
      }
    ]
  }
}
