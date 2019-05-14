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
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="VY6apQgrtzLTC_yR2i9QmKyTyc4xV9Injys1efZocMU" />
      {title && <title>{title}</title>}
      {description && <meta itemProp="description" content={description} />}
      {keywords && <meta itemProp="keywords" content={keywords.join(',')} />}
      {children}
    </Head>
  )
}
