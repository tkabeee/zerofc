import React from 'react'
import { useRouteData } from 'react-static'

import './style.scss'

export default () => {
  const data = useRouteData()
  return (
    <div className="dangerously" dangerouslySetInnerHTML={{__html: data.sitemap}}></div>
  )
}
