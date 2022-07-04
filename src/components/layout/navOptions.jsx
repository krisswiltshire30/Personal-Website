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
    margin-top: 2px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: gray;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #fff;
    }
  `

  const LinkBackground = styled.div`
    position: absolute;
    text-align: center;
    margin-left: -60px;
    border-top: 50px solid aqua;
    border-right: 60px solid transparent;
    opacity: 0.4;
    bottom: 0;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    transition: ease-in-out width 0.5s;
    ${StyledLink}:hover & {
      transition: ease-in-out width 0.5s;
      width: 160%;
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
