import React, { PropsWithChildren } from 'react'

interface HtmlTemplateProps {
  styleScript: string
  mainScript: string
  assets: {[k: string]: string}
}

const HtmlTemplate = (props: PropsWithChildren<HtmlTemplateProps>): JSX.Element => {
  return (
    <html lang="en">
        <head>
            <title>Kumparan Share</title>
            <link href={props.styleScript} rel="stylesheet"></link>
        </head>
        <body>
            <div id="root">{props.children}</div>
            <script src={props.mainScript} defer></script>
            <script dangerouslySetInnerHTML={{ __html: `window.__ASSETS_MAP__ = ${JSON.stringify(props.assets)}` }} charSet="UTF-8"></script>
        </body>
    </html>
  )
}

export default HtmlTemplate
