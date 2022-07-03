import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavOptions = () => {

  const Options = styled.div`
    display: flex;
    flex-direction: column;
  `

  const StyledLink = styled(props => <Link {...props} />)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: gray;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover {
      color: #ffc107;
    }
  `

  return (
    <Options>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/skills">Skills</StyledLink>
      <StyledLink to="/work">Work</StyledLink>
      <StyledLink to="/blog">Blog</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Options>
  )
}

export default NavOptions
