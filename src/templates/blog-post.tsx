import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link, graphql, PageProps } from "gatsby"
import Seo from "../components/seo"

export const Head = ({ data }: PageProps<BlogPostData>) => (
  <Seo
    title={data.markdownRemark.frontmatter.title}
    description={data.markdownRemark.frontmatter.description || data.markdownRemark.excerpt}
  />
)

const PostGlobalStyle = createGlobalStyle`
  .blog-body h2 {
    color: #fff;
    font-size: 22px;
    margin: 40px 0 16px 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #333;
  }
  .blog-body p {
    color: #ccc;
    font-size: 17px;
    line-height: 1.8;
    margin: 0 0 20px 0;
  }
  .blog-body strong {
    color: #fff;
  }
  .blog-body em {
    color: #aaa;
  }
  .blog-body a {
    color: aqua;
    text-decoration: none;
  }
  .blog-body a:hover {
    text-decoration: underline;
  }
  .blog-body ul, .blog-body ol {
    color: #ccc;
    font-size: 17px;
    line-height: 1.8;
    margin: 0 0 20px 0;
    padding-left: 24px;
  }
  .blog-body li {
    margin-bottom: 8px;
  }
  .blog-body code {
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 14px;
    color: aqua;
  }
  .blog-body pre {
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 24px;
    overflow-x: auto;
    margin: 0 0 24px 0;
  }
  .blog-body pre code {
    background: none;
    border: none;
    padding: 0;
    font-size: 14px;
    color: #ccc;
  }
  .blog-body hr {
    border: none;
    border-top: 1px solid #333;
    margin: 40px 0;
  }
  .blog-body blockquote {
    border-left: 3px solid aqua;
    margin: 0 0 24px 0;
    padding: 4px 0 4px 24px;
    color: #aaa;
    font-style: italic;
  }
`

const Page = styled.div`
  padding: 60px;
  max-width: 760px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`

const PostTitle = styled.h1`
  color: #fff;
  font-size: 40px;
  line-height: 1.2;
  margin: 0 0 12px 0;
`

const PostDate = styled.p`
  color: #666;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 48px 0;
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #333;
  margin: 48px 0;
`

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 48px;
  transition: color 0.2s ease;
  &:hover {
    color: aqua;
  }
`

const Nav = styled.nav`
  margin-top: 48px;
`

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`

const NavLink = styled(Link)`
  color: aqua;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

interface BlogPostData {
  markdownRemark: {
    id: string
    excerpt: string
    html: string
    frontmatter: {
      title: string
      date: string
      description: string
    }
  }
  previous: {
    fields: { slug: string }
    frontmatter: { title: string }
  } | null
  next: {
    fields: { slug: string }
    frontmatter: { title: string }
  } | null
}

const BlogPostTemplate = ({ data }: PageProps<BlogPostData>) => {
  const post = data.markdownRemark
  const { previous, next } = data

  return (
    <Page>
      <PostGlobalStyle />
<article itemScope itemType="http://schema.org/Article">
        <header>
          <BackLink to="/blog">← Back to Blogs</BackLink>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostDate>{post.frontmatter.date}</PostDate>
        </header>
        <section
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <Divider />
      </article>
      <Nav>
        <NavList>
          <li>
            {previous && (
              <NavLink to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </NavLink>
            )}
          </li>
          <li>
            {next && (
              <NavLink to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </NavLink>
            )}
          </li>
        </NavList>
      </Nav>
    </Page>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
