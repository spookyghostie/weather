var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var PROD_BUILD = JSON.parse(process.env.PROD_BUILD || "0");

module.exports = {
    context: __dirname + "/src/js/",
    entry: {
        index: "./index.js"
    },
    output: {
        filename: "js/[name].js",
        path: __dirname + "/public",
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
              'css?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]!autoprefixer!sass'
            )
        }],
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    sassLoader: {
        includePaths: [
          path.resolve(__dirname, "./src/bower_components/compass-mixins/lib"),
          path.resolve(__dirname, "./src/scss")
        ]
    },
    plugins: PROD_BUILD ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({minimize: true}),
      new ExtractTextPlugin('css/main.css', {
          allChunks: true
      })
    ]:[
      new ExtractTextPlugin('css/main.css', {
          allChunks: true
      })
    ]
}