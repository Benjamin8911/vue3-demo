const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[fullhash].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        // use: {
        //   loader: 'url-loader',
        //   options: {
        //     limit: 10000,
        //     name: '[name].[ext]?[hash:8]'
        //   }
        // }
        type: 'asset',
        generator: {
          filename: 'images/[hash].[ext]'
        }
      }
    ]
  },
  plugins:[
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
}