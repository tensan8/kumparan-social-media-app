import * as React from 'react'
import { Request, Response } from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../app/app'
import { AssetsProvider } from '../app/common/utils/assetsContext'
import { dehydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ssrPrepass from 'react-ssr-prepass'

export enum ServerCode {
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  OK = 200
}

const serverRenderer = (manifest: Object = {}) => async (req: Request, res: Response) => {
  const fullUrl = `${req.protocol}://${req.get('host') ?? ''}${req.originalUrl}`
  console.log('Full Url: ', fullUrl)
  console.log('Request Url: ', req.url)

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  const assetsMap = manifest !== null
    ? Object.fromEntries(Object.entries(manifest).filter(([key]) => key.includes('assets/')))
    : {}

  const app = (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AssetsProvider assetsMap={assetsMap}>
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        </AssetsProvider>
      </QueryClientProvider>
    </React.StrictMode>
  )

  try {
    await ssrPrepass(app)
  } catch (e) {
    console.log(e)
    return res.status(ServerCode.INTERNAL_SERVER_ERROR).send('Something went wrong')
  }

  const content = renderToString(app)

  const dehydratedState = dehydrate(queryClient)

  const html = `
    <!doctype html>
    <html lang="en">
        <head>
            <title>Kumparan Share</title>
            <link href=${manifest['main.css' as keyof typeof manifest].toString()} rel="stylesheet"></link>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src=${manifest['main.js' as keyof typeof manifest].toString()} defer></script>
            <script>
              window.__ASSETS_MAP__ = ${JSON.stringify(assetsMap)}
            </script>
            <script>
              window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}
            </script>
        </body>
    </html>`

  return res.status(ServerCode.OK).send(html)
}

export default serverRenderer
