import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const FEEDER_CONTACT_EMAIL = "kriss.wiltshire@gmail.com"

const Page = styled.div`
  padding: 60px;
  max-width: 760px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`

const Brand = styled.p`
  color: aqua;
  font-size: 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0 0 8px 0;
`

const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  line-height: 1.15;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const Updated = styled.p`
  color: #888;
  font-size: 14px;
  margin: 0 0 24px 0;
`

const SubNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 40px 0;
`

const SubNavLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 8px 14px;
  background: #1a1a1a;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: aqua;
    color: #fff;
  }

  &[aria-current="page"] {
    border-color: aqua;
    color: aqua;
  }
`

export const Section = styled.section`
  margin: 0 0 36px 0;
`

export const H2 = styled.h2`
  color: aqua;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0 0 16px 0;
`

export const H3 = styled.h3`
  color: #fff;
  font-size: 17px;
  margin: 24px 0 8px 0;
`

export const P = styled.p`
  color: #ccc;
  font-size: 16px;
  line-height: 1.75;
  margin: 0 0 16px 0;
`

export const UL = styled.ul`
  color: #ccc;
  font-size: 16px;
  line-height: 1.75;
  margin: 0 0 16px 0;
  padding-left: 22px;

  li {
    margin-bottom: 8px;
  }
`

export const OL = styled.ol`
  color: #ccc;
  font-size: 16px;
  line-height: 1.75;
  margin: 0 0 16px 0;
  padding-left: 22px;

  li {
    margin-bottom: 8px;
  }
`

export const Callout = styled.div`
  border: 1px solid #333;
  border-left: 3px solid aqua;
  border-radius: 8px;
  background: #1a1a1a;
  padding: 16px 20px;
  margin: 0 0 24px 0;

  p {
    margin: 0;
  }
`

export const A = styled.a`
  color: aqua;
  text-decoration: none;
  overflow-wrap: anywhere;
  &:hover {
    text-decoration: underline;
  }
`

export const InternalLink = styled(Link)`
  color: aqua;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const ContactLink = () => (
  <A href={`mailto:${FEEDER_CONTACT_EMAIL}`}>{FEEDER_CONTACT_EMAIL}</A>
)

interface FeederPageProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

const links = [
  { to: "/feeder/privacy", label: "Privacy policy" },
  { to: "/feeder/terms", label: "Terms of service" },
  { to: "/feeder/delete-account", label: "Delete account" },
]

const FeederPage = ({ title, lastUpdated, children }: FeederPageProps) => (
  <Page>
    <Brand>Feeder</Brand>
    <Title>{title}</Title>
    <Updated>Last updated: {lastUpdated}</Updated>
    <SubNav aria-label="Feeder pages">
      {links.map(link => (
        <SubNavLink key={link.to} to={link.to}>
          {link.label}
        </SubNavLink>
      ))}
    </SubNav>
    {children}
  </Page>
)

export default FeederPage
