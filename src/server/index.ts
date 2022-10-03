import express from 'express'
import compression from 'compression'
import path from 'path'
import runHttpServer from './runHttpServer'
import serverRenderer from './serverRenderer'
import runDevelopmentServer from './middleware'

const isProduction = process.env.NODE_ENV === 'production'

const app = express()

app.disable('x-powered-by')
app.use(compression())

app.use(express.static(path.join(process.cwd(), 'dist'), { index: false }))
app.use(express.json())
app.use(express.urlencoded)
app.use('/public', express.static('public'))
app.use(express.static(path.join(process.cwd(), 'public')))
app.use('/src/assets', express.static(path.join(process.cwd(), 'src/assets')))

const renderServer = (manifest: Object = {}): express.Router => {
  const routes = express.Router()

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  routes.get('*', serverRenderer(manifest))
  return routes
}

const initServer = (manifest: Object | undefined = {}): void => {
  app.use('/', renderServer(manifest))
  app.use((req: express.Request, res: express.Response) => {
    res.send('errors/404')
  })
}

if (!isProduction) {
  app.use(
    runDevelopmentServer((manifest) => {
      initServer(manifest)
      runHttpServer(app)
    })
  )
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const manifest = require('../../dist/manifest.json')
  initServer(manifest)
  runHttpServer(app)
}
