import React, { Fragment } from 'react'
import { RouteData } from 'react-static'
import Head from "../components/Head"
import Schedule from '../contents/schedule'

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
          <Schedule />
        </Fragment>
      )}
    </RouteData>
  )
}
