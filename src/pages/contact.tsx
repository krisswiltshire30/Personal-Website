import React from "react"
import styled from "styled-components"
import Seo from "../components/seo"

export const Head = () => <Seo title="Contact" />

const Page = styled.div`
  padding: 60px;
  max-width: 700px;
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
  margin: 0 0 40px 0;
`

const Intro = styled.p`
  color: #ccc;
  font-size: 18px;
  line-height: 1.8;
  margin: 0 0 48px 0;
`

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #ccc;
  text-decoration: none;
  font-size: 16px;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px 24px;
  background: #1a1a1a;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: aqua;
    color: #fff;
  }
`

const Label = styled.span`
  color: aqua;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  min-width: 80px;
`

const Value = styled.span`
  color: inherit;
`

const Contact = () => {
  return (
    <Page>
<PageTitle>Contact</PageTitle>
      <Subtitle>Get in touch</Subtitle>

      <Intro>
        I'm open to senior engineering roles, freelance projects, and technical
        conversations. The best way to reach me is by email or LinkedIn.
      </Intro>

      <LinkList>
        <ContactLink href="mailto:kriss.wiltshire@gmail.com">
          <Label>Email</Label>
          <Value>kriss.wiltshire@gmail.com</Value>
        </ContactLink>
        <ContactLink href="https://www.linkedin.com/in/kriss-wiltshire/" target="_blank" rel="noopener noreferrer">
          <Label>LinkedIn</Label>
          <Value>linkedin.com/in/kriss-wiltshire</Value>
        </ContactLink>
        <ContactLink href="https://github.com/krisswiltshire30" target="_blank" rel="noopener noreferrer">
          <Label>GitHub</Label>
          <Value>github.com/krisswiltshire30</Value>
        </ContactLink>
      </LinkList>
    </Page>
  )
}

export default Contact
