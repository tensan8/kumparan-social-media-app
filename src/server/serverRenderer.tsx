import * as React from 'react'
import { Request, Response } from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../app/app'
import { AssetsProvider } from '../app/common/utils/assetsContext'
import HtmlTemplate from '../app/htmlTemplate'

export enum ErrorCode {
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  OK = 200
}

const serverRenderer = (manifest: Object = {}) => async (req: Request, res: Response) => {
  const fullUrl = `${req.protocol}://${req.get('host') ?? ''}${req.originalUrl}`
  console.log('Full Url: ', fullUrl)
  console.log('Request Url: ', req.url)

  try {
    const assetsMap = manifest !== null
      ? Object.fromEntries(Object.entries(manifest).filter(([key]) => key.includes('assets/')))
      : {}

    const app = (
      <React.StrictMode>
        <HtmlTemplate
          assets={assetsMap}
          mainScript={manifest['main.js' as keyof typeof manifest].toString()}
          styleScript={manifest['main.css' as keyof typeof manifest].toString()}
        >
          <AssetsProvider assetsMap={assetsMap}>
            <StaticRouter location={req.url}>
              <App />
            </StaticRouter>
          </AssetsProvider>
        </HtmlTemplate>
      </React.StrictMode>
    )

    const content = renderToString(app)
    return res.status(ErrorCode.OK).send(`<!DOCTYPE html> ${content}`)
  } catch (e) {
    console.log(e)
    return res.status(ErrorCode.INTERNAL_SERVER_ERROR).send('Something went wrong')
  }
}

export default serverRenderer
