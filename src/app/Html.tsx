import React, { PropsWithChildren } from 'react'

interface Props {
  styleScript: string
  mainScript: string
  assets: {[k: string]: string}
}
const Html = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <html lang="en">
      <head>
        <title>Kumparan Share</title>
        <link href={props.styleScript} rel="stylesheet"></link>
      </head>
      <body>
        <div id="root">{props.children}</div>

        <script src={props.mainScript} defer></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__ASSETS_MAP__ = ${JSON.stringify(props.assets)}`
          }}
          charSet="UTF-8"
        />
      </body>
    </html>
  )
}

export default Html
