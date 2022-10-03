import { Request, Response } from 'express'
import { renderToString } from 'react-dom/server'
import client from '../client'

export enum ErrorCode {
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

const serverRenderer = (manifest: Object = {}) => async (req: Request, res: Response) => {
  const content = renderToString(client(req.url))

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
