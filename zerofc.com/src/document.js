import React, { Fragment } from 'react'

// https://github.com/nathanpower/wordflow-site/blob/0b50ae11b8e737e6cf8d00ed7a4d2ce1561632ae/src/Document.jsx#L17

const renderMeta = routeInfo => {
  if (!routeInfo || !routeInfo.path) {
    return null
  }

  // TODO:
  if (routeInfo.path === '/') {
    return (
      <Fragment>
        <title>{routeInfo.data.meta.pageTitle}</title>
        <meta name="description" content="test" />
        <meta name="keywords" content="test" />
      </Fragment>
    )
  }
}

export default ({
  Html,
  Head,
  Body,
  children,
  routeInfo,
}) => {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="UTF-8" />
        {renderMeta(routeInfo)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="VY6apQgrtzLTC_yR2i9QmKyTyc4xV9Injys1efZocMU" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css" integrity="sha384-QokYePQSOwpBDuhlHOsX0ymF6R/vLk/UQVz3WHa6wygxI5oGTmDTv8wahFOSspdm" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/fontawesome.css" integrity="sha384-vd1e11sR28tEK9YANUtpIOdjGW14pS87bUBuOIoBILVWLFnS+MCX9T6MMf0VdPGq" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _gaq = _gaq || [];
              _gaq.push(['_setAccount', 'UA-2987422-2']);
              _gaq.push(['_trackPageview']);

              (function() {
                  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
              })();
            `,
          }}
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
