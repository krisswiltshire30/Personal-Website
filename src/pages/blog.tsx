import React from "react"
import styled from "styled-components"
import { Link, graphql, PageProps } from "gatsby"
import Seo from "../components/seo"

export const Head = () => <Seo title="Blog" />

const Page = styled.div`
  padding: 60px;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`

const PageTitle = styled.h1`
  color: #fff;
  font-size: 48px;
  margin: 0 0 8px 0;
`

const Subtitle = styled.p`
  color: aqua;
  font-size: 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0 0 60px 0;
`

const PostList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const PostItem = styled.li`
  border-left: 2px solid #333;
  padding-left: 28px;
  transition: border-color 0.2s ease;
  &:hover {
    border-color: aqua;
  }
`

const PostLink = styled(Link)`
  text-decoration: none;
`

const PostTitle = styled.h2`
  color: #fff;
  font-size: 22px;
  margin: 0 0 8px 0;
  transition: color 0.2s ease;
  ${PostLink}:hover & {
    color: aqua;
  }
`

const PostMeta = styled.p`
  color: #666;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 12px 0;
`

const PostExcerpt = styled.p`
  color: #aaa;
  font-size: 15px;
  line-height: 1.7;
  margin: 0;
`

const Empty = styled.p`
  color: #666;
  font-size: 16px;
`

interface BlogData {
  allMarkdownRemark: {
    nodes: Array<{
      excerpt: string
      fields: { slug: string }
      frontmatter: {
        date: string
        title: string
        description: string
      }
    }>
  }
}

const Blog = ({ data }: PageProps<BlogData>) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Page>
<PageTitle>Blog</PageTitle>
      <Subtitle>Thoughts on engineering</Subtitle>

      {posts.length === 0 ? (
        <Empty>No posts yet.</Empty>
      ) : (
        <PostList>
          {posts.map(post => (
            <PostItem key={post.fields.slug}>
              <PostLink to={post.fields.slug}>
                <PostMeta>{post.frontmatter.date}</PostMeta>
                <PostTitle>{post.frontmatter.title}</PostTitle>
                <PostExcerpt>
                  {post.frontmatter.description || post.excerpt}
                </PostExcerpt>
              </PostLink>
            </PostItem>
          ))}
        </PostList>
      )}
    </Page>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
