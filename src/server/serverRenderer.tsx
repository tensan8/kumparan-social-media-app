import { Request, Response } from 'express'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../app/App'

export enum ErrorCode {
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

const serverRenderer = (manifest: Object = {}) => async (req: Request, res: Response) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`
  console.log('fullUrl: ', fullUrl)
  console.log('req.url: ', req.url)
  const app = (
    <React.StrictMode>
    <StaticRouter location={req.url}>
      <App/>
    </StaticRouter>
    </React.StrictMode>
  )

  const content = renderToString(app)

  const mainScript = manifest != null && manifest['main.js' as keyof typeof manifest] != null
    ? `<script src=".${manifest['main.js' as keyof typeof manifest].toString()}" defer></script>`
    : ''

  const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Kumparan Share</title>
        </head>
        <body>
            <div id="root">${content}</div>
            ${mainScript}
        </body>
    </html>
  `

  return res.status(200).send(html)
}

export default serverRenderer
