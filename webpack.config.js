var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  // resolve: {
  //   alias: {
  //     setUpActions: 'public/actions/setUpActions.js',
  //     setUpReducers: 'public/reducers/setUpReducers.js',
  //     setUpStore: './public/stores/setUpStore.js'
  //   },
  //   extensions: ['.js', '.jsx']
  // },
  plugins: [new HtmlWebpackPlugin({
    template: 'public/index.html'
  })]
}
