import React from "react"
import { Head } from "react-static"

export default ({
  children,
  title,
  description,
  keywords
}) => {
  return (
    <Head>
      {children}
      {title && <title>{title}</title>}
      {description && <meta itemProp="description" content={description} />}
      {keywords && <meta itemProp="keywords" content={keywords.join(',')} />}
    </Head>
  )
}
