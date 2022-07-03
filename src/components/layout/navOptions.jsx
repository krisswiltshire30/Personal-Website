import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavOptions = () => {

  const Options = styled.div`
    display: flex;
    flex-direction: column;
  `

  return (
    <Options>
      <Link to="/about">About</Link>
      <Link to="/about">Skills</Link>
      <Link to="/about">Work</Link>
      <Link to="/about">Blog</Link>
      <Link to="/contact">Contact</Link>
    </Options>
  )
}

export default NavOptions
