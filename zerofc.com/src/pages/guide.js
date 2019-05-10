import React, { Fragment } from 'react'
import { RouteData } from 'react-static'
import Head from "../components/Head"
import Guide from '../contents/guide'

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
          <Guide />
        </Fragment>
      )}
    </RouteData>
  )
}
