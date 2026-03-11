import React, { useRef } from "react"
import styled from "styled-components"
import { Canvas } from "react-three-fiber"
import Seo from "../components/seo"
import Stars from "../components/animations/stars"

const AboutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`

const Title = styled.p`
  font-weight: bold;
  color: #fff;
  font-size: 76px;
  white-space: pre-line;
  line-height: 1;
  padding: 50px;
`

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  margin-left: 200px;
  border-bottom: 1px solid #fff;
`

const Content = styled.div`
  z-index: 1;
  position: absolute;
`

const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const string = "Hi,\nI'm Kriss,\nSoftware Engineer"

  return (
    <AboutWrapper>
      <Seo title="About" />
      <Canvas style={{ position: "fixed" }} camera={{ fov: 90, position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
      <Content ref={ref}>
        <Section>
          <Title>{string}</Title>
        </Section>
        <Section>
          <Title>Section 2</Title>
        </Section>
        <Section>
          <Title>Section 3</Title>
        </Section>
        <Section>
          <Title>Section 4</Title>
        </Section>
      </Content>
    </AboutWrapper>
  )
}

export default About
