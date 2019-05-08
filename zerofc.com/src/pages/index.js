import React, { Fragment } from 'react'
import { Head, useRouteData } from 'react-static'
import Root from '../contents/root'

export default () => {
  const data = useRouteData()
  return (
    <Fragment>
      <Head>
        <title>{data.meta.pageTitle}</title>
        <meta name="description" content={data.meta.pageDescription} />
        <meta name="keywords" content={data.meta.pageKeywords.join(',')} />
      </Head>
      <div className="main__image">
        <div className="inside-text">打撃・グラップリング・柔術・レスリング・キックボクシングなど各自の希望に合わせた練習を行っています。初心者や未経験の方でも楽しく練習ができる格闘技ジムです。日本修斗協会公認オフィシャルジムとして岡山・倉敷・水島・総社で活動中です。</div>
      </div>
      <Root />
    </Fragment>
  )
}
