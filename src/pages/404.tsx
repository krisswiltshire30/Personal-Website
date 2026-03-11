import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Seo from "../components/seo"

export const Head = () => <Seo title="404: Not Found" />

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
`

const Icon = styled.span`
  font-family: "Material Symbols Rounded";
  font-size: 80px;
  color: aqua;
  display: block;
  margin-bottom: 24px;
  line-height: 1;
`

const Code = styled(motion.h1)`
  font-size: 96px;
  font-weight: 900;
  color: #fff;
  margin: 0 0 8px 0;
  line-height: 1;
`

const Title = styled.h2`
  color: aqua;
  font-size: 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0 0 24px 0;
`

const Body = styled.p`
  color: #aaa;
  font-size: 16px;
  max-width: 360px;
  line-height: 1.7;
  margin: 0 0 40px 0;
`

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #111;
  background: aqua;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 6px;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.85;
  }
`

const LinkIcon = styled.span`
  font-family: "Material Symbols Rounded";
  font-size: 18px;
  line-height: 1;
`

const NotFoundPage = () => {
  return (
    <Page>
<motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Icon>travel_explore</Icon>
        <Code
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          404
        </Code>
        <Title>Page not found</Title>
        <Body>
          Looks like you've wandered somewhere that doesn't exist. Let's get you back on track.
        </Body>
        <HomeLink to="/about">
          <LinkIcon>arrow_back</LinkIcon>
          Back to home
        </HomeLink>
      </motion.div>
    </Page>
  )
}

export default NotFoundPage
