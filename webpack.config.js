'use strict'
var webpack = require('webpack')
var env = process.env.NODE_ENV
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    redux: 'Redux',
    'react-redux': 'ReactRedux',
    'redux-form': 'ReduxForm'
  },
  entry: {
    main: ['./src/client.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader',
        query: { limit: 40960 }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:
            'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer-loader?browsers=last 2 version!sass-loader?outputStyle=expanded&sourceMap'
        })
      }
    ]
  },
  output: {
    library: 'ReduxFormWebsiteTemplate',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['.js']
  }
}
