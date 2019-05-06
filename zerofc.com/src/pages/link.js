import React from 'react'
import { useRouteData } from 'react-static'

export default () => {
  const data = useRouteData()
  return (
    <div dangerouslySetInnerHTML={{__html: data.link}}></div>
  )
}
