import React, { Fragment } from 'react'
import { RouteData } from 'react-static'
import Head from "../components/Head"
import Sitemap from '../contents/sitemap'

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
          <Sitemap />
        </Fragment>
      )}
    </RouteData>
  )
}
