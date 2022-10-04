import { Request, Response } from 'express'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../app/App'
import { AssetsProvider } from '../app/common/utils/AssetsContext'
import Html from '../app/Html'

export enum ErrorCode {
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

const serverRenderer =
  (manifest: Object = {}) =>
    async (req: Request, res: Response) => {
      const fullUrl = `${req.protocol}://${req.get('host') ?? ''}${req.originalUrl}`
      console.log('fullUrl: ', fullUrl)
      console.log('req.url: ', req.url)

      try {
        const assetsMap =
        manifest !== null
          ? Object.fromEntries(
            Object.entries(manifest).filter(([key]) =>
              key.includes('assets/')
            )
          )
          : {}

        // const mainScript =
        // manifest != null && manifest['main.js' as keyof typeof manifest] != null
        //   ? `<script src=".${manifest[
        //       'main.js' as keyof typeof manifest
        //     ].toString()}" defer></script>`
        //   : ''
        // const styleScript =
        // manifest != null && manifest['main.js' as keyof typeof manifest] != null
        //   ? `<link href=".${manifest[
        //       'main.css' as keyof typeof manifest
        //     ].toString()}" rel="stylesheet" defer></link>`
        //   : ''

        const app = (
        <React.StrictMode>
          <Html
            assets={assetsMap}
            mainScript={manifest['main.js' as keyof typeof manifest].toString()}
            styleScript={manifest['main.css' as keyof typeof manifest].toString()}>
            <AssetsProvider assetsMap={assetsMap}>
              <StaticRouter location={req.url}>
                <App />
              </StaticRouter>
            </AssetsProvider>
          </Html>
        </React.StrictMode>
        )

        const content = renderToString(app)

        const html = `<!DOCTYPE html> ${content}`
        return res.status(200).send(html)
      } catch (error) {
        console.log('>>', { error })
        return res.status(500).send('something went wrong')
      }
    }

export default serverRenderer
