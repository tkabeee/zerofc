import React, { Component } from 'react'

export default class CustomHtml extends Component {
  render () {
    const { Html, Head, Body, children } = this.props

    return (
      <Html lang="ja">
        <Head>
          <meta charSet="UTF-8" />
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
        <Body>
          {children}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof document !== 'undefined') {
                  document.write('<div id="fb-root"></div>');
                  (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.9";
                    fjs.parentNode.insertBefore(js, fjs);
                  }(document, 'script', 'facebook-jssdk'));
                }
              `,
            }}
          />
        </Body>
      </Html>
    )
  }
}
