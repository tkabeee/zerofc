import path from 'path'
import axios from 'axios'
import React from 'react'

const SITE_ROOT = 'https://zerofc.web.fc2.com'
const SITE_TITLE = 'ゼロ戦クラブ'
const SITE_SUB_TITLE = '岡山総合格闘技ジム'

export default {
  siteRoot: SITE_ROOT,
  getSiteData: async ({ dev }) => ({
    title: SITE_TITLE,
    subTitle: SITE_SUB_TITLE
  }),
  getRoutes: async ({ dev }) => {
    const { data: root }       = await axios.get(`${SITE_ROOT}/contents/root/`)
    const { data: admission }  = await axios.get(`${SITE_ROOT}/contents/admission/`)
    const { data: guide }      = await axios.get(`${SITE_ROOT}/contents/guide/`)
    const { data: schedule }   = await axios.get(`${SITE_ROOT}/contents/schedule/`)
    const { data: instructor } = await axios.get(`${SITE_ROOT}/contents/instructor/`)
    const { data: kids }       = await axios.get(`${SITE_ROOT}/contents/kids/`)
    const { data: access }     = await axios.get(`${SITE_ROOT}/contents/access/`)
    const { data: link }       = await axios.get(`${SITE_ROOT}/contents/link/`)
    const { data: faq }        = await axios.get(`${SITE_ROOT}/contents/faq/`)
    const { data: sitemap }    = await axios.get(`${SITE_ROOT}/contents/sitemap/`)

    return [
      {
        path: '/',
        getData: () => ({
          root,
          meta: {
            pageTitle: `${SITE_SUB_TITLE} ${SITE_TITLE}（修斗/ブラジリアン柔術/グラップリング/レスリング/キックボクシング/グローブ空手）【岡山/倉敷/水島/総社】`,
            pageDescription: '打撃・グラップリング・柔術・レスリング・キックボクシングなど各自の希望に合わせた練習を行っています。初心者や未経験の方でも楽しく練習ができる格闘技ジムです。修斗協会公認チームとして岡山・倉敷・水島・総社で活動中。岡山在住のプロ総合格闘家が教えます！',
            pageKeywords: ['岡山','倉敷','水島','格闘技','総合格闘技','柔術','レスリング','修斗','キック','ボクシング','空手']
          }
        })
      },
      {
        path: '/admission',
        getData: () => ({
          admission,
          meta: {
            pageTitle: `入会案内｜${SITE_SUB_TITLE} ${SITE_TITLE}`,
            pageDescription: `${SITE_SUB_TITLE} ${SITE_TITLE}の入会情報をご案内します。岡山本部・水島支部・倉敷総社支部`,
            pageKeywords: ['岡山','倉敷','水島','格闘技','柔術','修斗','入会','案内','会費']
          }
        })
      },
      {
        path: '/guide',
        getData: () => ({
          guide,
          meta: {
            pageTitle: `施設案内｜${SITE_SUB_TITLE} ${SITE_TITLE}`,
            pageDescription: `${SITE_SUB_TITLE} ${SITE_TITLE}の施設をご案内します。`,
            pageKeywords: ['岡山','倉敷','水島','格闘技','フィットネス','スポーツクラブ','柔術','総合格闘技','修斗','練習','環境','設備']
          }
        })
      },
      {
        path: '/schedule',
        getData: () => ({
          schedule,
          meta: {
            pageTitle: `練習スケジュール｜${SITE_SUB_TITLE} ${SITE_TITLE}`,
            pageDescription: `${SITE_SUB_TITLE} ${SITE_TITLE}の練習スケジュールです。曜日毎に初心者クラスやキッズクラス、打撃クラスや柔術クラス、フリースパーリングなどを設けています。`,
            pageKeywords: ['岡山','倉敷','水島','格闘技','柔術','修斗','練習','スケジュール']
          }
        })
      },
      {
        path: '/instructor',
        getData: () => ({
          instructor,
          meta: {
            pageTitle: `インストラクター｜${SITE_SUB_TITLE} ${SITE_TITLE}`,
            pageDescription: `${SITE_SUB_TITLE} ${SITE_TITLE}のインストラクターをご紹介します。経験豊富な現役プロ選手がインストラクターとして技術指導などしっかりとサポートします。`,
            pageKeywords: ['岡山','倉敷','水島','格闘技','柔術','修斗','プロ','選手','サポート']
          }
        })
      },
      {
        path: '/kids',
        getData: () => ({
          kids,
          meta: {
            pageTitle: `キッズ｜${SITE_SUB_TITLE} ${SITE_TITLE}`,
            pageDescription: `${SITE_SUB_TITLE} ${SITE_TITLE}のキッズ情報をご案内します。`,
            pageKeywords: ['岡山','倉敷','水島','格闘技','柔術','修斗','練習','少年','少女']
          }
        })
      },
      {
        path: '/access',
        getData: () => ({
          access,
          meta: {
            pageTitle: `アクセスマップ｜${SITE_SUB_TITLE} ${SITE_TITLE}`,
            pageDescription: `${SITE_SUB_TITLE} ${SITE_TITLE}のアクセスマップです。ジムの住所・連絡先・詳細情報など`,
            pageKeywords: ['岡山','倉敷','水島','格闘技','柔術','修斗','交通','アクセス']
          }
        })
      },
      {
        path: '/link',
        getData: () => ({
          link,
          meta: {
            pageTitle: `リンク｜${SITE_SUB_TITLE} ${SITE_TITLE}`,
            pageDescription: '岡山以外でも仲良くさせてもらっている修斗・柔術チームなどの格闘技ジム関連や格闘技アイテムなどの道具関連、その他会員さんが運営しているサイトやブログなどを紹介。',
            pageKeywords: ['岡山','倉敷','水島','格闘技','柔術','修斗','リンク','事務','チーム']
          }
        })
      },
      {
        path: '/faq',
        getData: () => ({
          faq,
          meta: {
            pageTitle: `よくある質問｜${SITE_SUB_TITLE} ${SITE_TITLE}`,
            pageDescription: `${SITE_SUB_TITLE} ${SITE_TITLE}に関するよくあるご質問をまとめてみました。`,
            pageKeywords: ['岡山','倉敷','水島','格闘技','柔術','修斗','質問','回答']
          }
        })
      },
      {
        path: '/sitemap',
        getData: () => ({
          sitemap,
          meta: {
            pageTitle: `サイトマップ｜${SITE_SUB_TITLE} ${SITE_TITLE}`,
            pageDescription: `${SITE_SUB_TITLE} ${SITE_TITLE}のオフィシャルサイトマップです。`,
            pageKeywords: ['岡山','倉敷','水島','格闘技','柔術','修斗','サイト','コンテンツ']
          }
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
