import React from 'react'
import { useRouteData } from 'react-static'

export default () => {
  const data = useRouteData()
  return (
    <div className="dangerously" dangerouslySetInnerHTML={{__html: data.schedule}}></div>
  )
}
