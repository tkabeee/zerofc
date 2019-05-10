import React, { Fragment } from 'react'
import { RouteData } from 'react-static'
import Head from "../components/Head"
import Root from '../contents/root'

export default () => {
  return (
    <RouteData>
      {({ meta }) => (
        <Fragment>
          <Head
            title={meta.title}
            description={meta.description}
            keywords={meta.keywords}
          />
          <div className="main__image">
            <div className="inside-text">打撃・グラップリング・柔術・レスリング・キックボクシングなど各自の希望に合わせた練習を行っています。初心者や未経験の方でも楽しく練習ができる格闘技ジムです。日本修斗協会公認オフィシャルジムとして岡山・倉敷・水島・総社で活動中です。</div>
          </div>
          <Root />
        </Fragment>
      )}
    </RouteData>
  )
}
