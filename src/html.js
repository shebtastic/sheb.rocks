import React from "react"

const HTML = ({ htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents }) =>
  <html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <noscript key="noscript" id="gatsby-noscript">
        This page might bug out without JavaScript.
      </noscript>
      <div id="___gatsby-background" aria-hidden="true"></div>
      <div
        key={"body"}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>

export default HTML