import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SeoQueryData {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

interface SeoProps {
  title: string
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string } | { property: string; content: string }>
}

const Seo = ({ description = "", lang = "en", meta = [], title }: SeoProps) => {
  const { site } = useStaticQuery<SeoQueryData>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
      ].concat(meta)}
    />
  )
}

export default Seo
