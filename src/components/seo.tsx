import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SeoProps {
  title: string
  description?: string
}

const Seo = ({ title, description }: SeoProps) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const fullTitle = `${title} | ${site.siteMetadata.title}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  )
}

export default Seo
