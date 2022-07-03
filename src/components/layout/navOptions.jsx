import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavOptions = () => {

  const Options = styled.div`
    display: flex;
    flex-direction: column;
  `

  const StyledLink = styled(props => <Link {...props} />)`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: gray;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover {
      color: #fff;
      transition: all 0.3s ease-in-out;
    }
  `

  const LinkBackground = styled.div`
    position: absolute;
    text-align: center;
    background-color: #949494;
    opacity: 0.1;
    bottom: 0;
    width: 0;
    height: 0;
    z-index: -1;
    ${StyledLink}:hover & {
      transition: width 0.5s, height 0.1s;
      width: 100%;
      height: 100%;
    }
  `


  return (
    <Options>
      <StyledLink to="/about">
        About
        <LinkBackground/>
      </StyledLink>
      <StyledLink to="/skills">
        Skills
        <LinkBackground/>
      </StyledLink>
      <StyledLink to="/work">
        Work
        <LinkBackground/>
      </StyledLink>
      <StyledLink to="/blog">
        Blog
        <LinkBackground/>
      </StyledLink>
      <StyledLink to="/contact">
        Contact
        <LinkBackground/>
      </StyledLink>
    </Options>
  )
}

export default NavOptions
