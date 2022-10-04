/* eslint-disable @typescript-eslint/no-dynamic-delete */
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.config'

const isProduction = process.env.NODE_ENV === 'production'

const compiler = webpack(config)
const clientDir = path.join(process.cwd(), 'src/app/')

if (!isProduction) {
  compiler.hooks.afterEmit.tap('cleanup-the-require-cache', () => {
    Object.keys(require.cache)
      .filter((key) => key.includes(clientDir))
      .forEach((key) => delete require.cache[key])
  })
}

const runDevelopmentServer = (callback = (manifest: Object = {}) => {}): any[] => {
  if (!isProduction) {
    const webpackDevInstance = webpackDevMiddleware(compiler, {
      serverSideRender: true,
      writeToDisk: false,
      publicPath: config.output?.publicPath ?? '/',
      headers: { 'Access-Control-Allow-Origin': '*' },
      stats: 'minimal'
    })

    webpackDevInstance.waitUntilValid(() => {
      const manifest = JSON.parse(
        // @ts-expect-error
        compiler.outputFileSystem.readFileSync(
          path.join(__dirname, '../../dist', 'manifest.json'), 'utf8'
        )
      )
      console.log('dev', manifest)
      callback(manifest)
    })

    const hotMiddleware = webpackHotMiddleware(compiler, {
      log: false,
      path: '/__webpack_hmr',
      heartbeat: 2000
    })
    return [webpackDevInstance, hotMiddleware]
  }
  callback()
  return []
}

export default runDevelopmentServer
