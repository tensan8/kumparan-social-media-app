/* eslint-disable @typescript-eslint/quotes */
import path from 'path'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
import { Configuration, HotModuleReplacementPlugin } from 'webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const isProduction = process.env.NODE_ENV === 'production'

const main = !isProduction
  ? [
      'webpack-hot-middleware/client?path=/__webpack_hmr',
      path.join(__dirname, 'src/app/index.tsx')
    ]
  : [
      path.join(__dirname, 'src/app/index.tsx')
    ]

const sharedBabelPlugins: string[] = []

const jsPlugins = !isProduction
  ? ['react-refresh/babel', ...sharedBabelPlugins]
  : [...sharedBabelPlugins]

const sharedPlugins = [
  new MiniCssExtractPlugin({
    filename: '[name].bundle.css',
    chunkFilename: '[id].css'
  }),
  new WebpackManifestPlugin({
    publicPath: '/',
    fileName: 'manifest.json',
    writeToFileEmit: true
  })
]

const plugins = !isProduction
  ? [
      ...sharedPlugins,
      new HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin({
        overlay: {
          sockIntegration: 'whm'
        }
      })
    ]
  : sharedPlugins

const webpackConfig: Configuration = {
  target: 'web',
  mode: !isProduction ? 'development' : 'production',
  entry: { main },
  devtool: !isProduction ? 'inline-source-map' : 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `[name].js`,
    chunkFilename: `[name].chunk.js`,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.png']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            plugins: jsPlugins
          }
        }
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      }
    ]
  },
  plugins
}

export default webpackConfig
