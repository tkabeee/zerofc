import path from 'path'
import axios from 'axios'
import React from 'react'

const siteRoot = 'https://zerofc.web.fc2.com'

export default {
  siteRoot: siteRoot,
  getSiteData: async ({ dev }) => ({
    siteTitle: 'ゼロ戦クラブ',
    siteSubTitle: '岡山総合格闘技ジム'
  }),
  getRoutes: async ({ dev }) => {
    const { data: root }       = await axios.get(`${siteRoot}/contents/root/`)
    const { data: admission }  = await axios.get(`${siteRoot}/contents/admission/`)
    const { data: guide }      = await axios.get(`${siteRoot}/contents/guide/`)
    const { data: schedule }   = await axios.get(`${siteRoot}/contents/schedule/`)
    const { data: instructor } = await axios.get(`${siteRoot}/contents/instructor/`)
    const { data: kids }       = await axios.get(`${siteRoot}/contents/kids/`)
    const { data: access }     = await axios.get(`${siteRoot}/contents/access/`)
    const { data: link }       = await axios.get(`${siteRoot}/contents/link/`)
    const { data: faq }        = await axios.get(`${siteRoot}/contents/faq/`)
    const { data: sitemap }    = await axios.get(`${siteRoot}/contents/sitemap/`)

    return [
      {
        path: '/',
        getData: () => ({ root })
      },
      {
        path: '/admission',
        getData: () => ({ admission })
      },
      {
        path: '/guide',
        getData: () => ({ guide })
      },
      {
        path: '/schedule',
        getData: () => ({ schedule })
      },
      {
        path: '/instructor',
        getData: () => ({ instructor })
      },
      {
        path: '/kids',
        getData: () => ({ kids })
      },
      {
        path: '/access',
        getData: () => ({ access })
      },
      {
        path: '/link',
        getData: () => ({ link })
      },
      {
        path: '/faq',
        getData: () => ({ faq })
      },
      {
        path: '/sitemap',
        getData: () => ({ sitemap })
      }
    ]
  },
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="ja">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="VY6apQgrtzLTC_yR2i9QmKyTyc4xV9Injys1efZocMU" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css" integrity="sha384-QokYePQSOwpBDuhlHOsX0ymF6R/vLk/UQVz3WHa6wygxI5oGTmDTv8wahFOSspdm" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/fontawesome.css" integrity="sha384-vd1e11sR28tEK9YANUtpIOdjGW14pS87bUBuOIoBILVWLFnS+MCX9T6MMf0VdPGq" crossOrigin="anonymous" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-sass'),
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
