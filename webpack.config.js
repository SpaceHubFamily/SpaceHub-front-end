var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',

        include: [
          path.resolve(__dirname, "public"),
        ],
        test: /\.(js)$/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {
        test: /\.(gif|jpe?g|png|svg)(\?.*)?$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {}
          }
  ]
}
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
