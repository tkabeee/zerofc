import React, { Fragment } from 'react'
import { Head, useRouteData } from 'react-static'
import Kids from '../contents/kids'

export default () => {
  const data = useRouteData()
  return (
    <Fragment>
      <Head>
        <title>{data.meta.pageTitle}</title>
        <meta name="description" content={data.meta.pageDescription} />
        <meta name="keywords" content={data.meta.pageKeywords.join(',')} />
      </Head>
      <Kids />
    </Fragment>
  )
}
