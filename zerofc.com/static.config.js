import path from 'path'
import axios from 'axios'
import React from 'react'

const siteRoot = 'https://zerofc.web.fc2.com'

export default {
  siteRoot: siteRoot,
  getSiteData: async ({ dev }) => ({
    title: 'ゼロ戦クラブ',
    subTitle: '岡山総合格闘技ジム',
    tags: ['修斗','ブラジリアン柔術','グラップリング','レスリング','キックボクシング','グローブ空手'],
    description: '打撃・グラップリング・柔術・レスリング・キックボクシングなど各自の希望に合わせた練習を行っています。初心者や未経験の方でも楽しく練習ができる格闘技ジムです。修斗協会公認チームとして岡山・倉敷・水島・総社で活動中。岡山在住のプロ総合格闘家が教えます！',
    keywords: ['岡山','倉敷','水島','格闘技','総合格闘技','柔術','レスリング','修斗','キック','ボクシング','空手']
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
        getData: () => ({
          admission,
          meta: { pageTitle: '入会案内' }
        })
      },
      {
        path: '/guide',
        getData: () => ({
          guide,
          meta: { pageTitle: '施設案内' }
        })
      },
      {
        path: '/schedule',
        getData: () => ({
          schedule,
          meta: { pageTitle: '練習スケジュール' }
        })
      },
      {
        path: '/instructor',
        getData: () => ({
          instructor,
          meta: { pageTitle: 'インストラクター' }
        })
      },
      {
        path: '/kids',
        getData: () => ({
          kids,
          meta: { pageTitle: 'キッズ' }
        })
      },
      {
        path: '/access',
        getData: () => ({
          access,
          meta: { pageTitle: 'アクセスマップ' }
        })
      },
      {
        path: '/link',
        getData: () => ({
          link,
          meta: { pageTitle: 'リンク' }
        })
      },
      {
        path: '/faq',
        getData: () => ({
          faq,
          meta: { pageTitle: 'よくある質問' }
        })
      },
      {
        path: '/sitemap',
        getData: () => ({
          sitemap,
          meta: { pageTitle: 'サイトマップ' }
        })
      }
    ]
  },
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="UTF-8" />
          <title>{`${siteData.subTitle} ${siteData.title}（${siteData.tags.join('/')}）`}</title>
          <meta name="description" content={siteData.description} />
          <meta name="keywords" content={siteData.keywords.join(',')} />
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
  },
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
