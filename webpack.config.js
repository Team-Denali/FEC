const path = require("path");
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LodashWebpackPlugin = require('lodash-webpack-plugin');
// var isDevelopment;

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  // output: {
  //   path: path.join(__dirname, 'public'),
  //   filename: "bundle.js"
  // },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  // resolve: {
  //   alias: {
  //     'react-dom$': path.resolve(__dirname, 'node_modules/react-dom'),
  //   },
  // },
  // [devtool] this is an additional source map that will let the browser know what files are running our code.
  // Helps with error tracing. Without it we will not know where our errors are coming from because it will state that everything inside the bundle file.
  devtool: "eval-cheap-module-source-map",
  // [devServer] configuration for the live server including port
  devServer: {
    // [static] config for how what to serve
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    // [port] what port on our local machine to run the dev server
    port: 3000,
  },
  optimization: {
    minimize: true,
    splitChunks: {
      minSize: 0,
      //minRemainingSize: 0,
      maxSize: 5000,
      minChunks: 1,
      maxAsyncRequests: 60,
      maxInitialRequests: 60,
      //enforceSizeThreshold: 50000,
      cacheGroups: {
        cssRuntime: {
          test: /css-loader.*runtime/,
          chunks: 'initial',
          minSize: 0,
          minChunks: 2,
          name: 'css-runtime',
          priority: 10,
        },
        reactIcons: {
          test: /[\\/]node_modules[\\/](react-icons)[\\/]/,
          name: 'vendors-react-icons',
          chunks: 'all',
          minSize: 0,
          minChunks: 1,
          priority: 10,
          enforce: true,
        },
        reactDom: {
          test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
          name: 'react-dom',
          chunks: 'all',
          priority: 20,
          enforce: true,
        },
        axios: {
          test: /[\\/]node_modules[\\/](axios)[\\/]/,
          name: 'axios',
          priority: -10,
          minChunks: 1,
          enforce: true,
        },
        utils: {
          test: /[\\/]node_modules[\\/](utils\.js)[\\/]/,
          name: 'utils',
          priority: 20,
          chunks: 'all',
          minChunks: 1,
          enforce: true,
        },
        react: {
          test: /[\\/]node_modules[\\/](react)[\\/]/,
          name: 'react',
          chunks: 'all',
          priority: 1,
          enforce: true,
        }
      }
    }
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
    // }),
    new BundleAnalyzerPlugin(),
    new LodashWebpackPlugin()
  ]
}