var webpack = require('webpack')
var path = require('path')

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['tests.webpack.js'],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-webpack',
      'karma-coverage',
      'karma-mocha-reporter',
      'karma-mocha',
      'karma-sourcemap-loader'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha', 'coverage'],
    webpack: {
      devtool: 'inline-source-map',
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
          loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]!autoprefixer!sass"
        }],
        postLoaders: [{
          test: /\.jsx?$/,
          exclude: /(test|node_modules|src\/bower_components)\//,
          loader: 'istanbul-instrumenter'
        }]
      },
      resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
      },
      sassLoader: {
        includePaths: [
          path.resolve(__dirname, "./src/bower_components/compass-mixins/lib"),
          path.resolve(__dirname, "./src/scss")
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  })
}
