import styled from 'styled-components';
import * as React from "react"

import Seo from "../components/seo"

const About = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    animation: 0.5s ease-out 0s 1 slideInFromLeft, fadeIn 0.5s 1 forwards ;
  `

  return (
    <>
      <Seo title="About" />
      <Title>Hi, have you met me?</Title>

    </>
  )
}

export default About