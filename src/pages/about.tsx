import React, { useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
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

const Content = styled.div`
  z-index: 1;
  position: absolute;
  width: calc(100vw - 200px);
  left: 200px;
`

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  box-sizing: border-box;
`

const Card = styled(motion.div)`
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 56px;
  max-width: 720px;
  width: 100%;
`

const HeroTitle = styled(motion.h1)`
  font-weight: bold;
  color: #fff;
  font-size: 76px;
  white-space: pre-line;
  line-height: 1;
  margin: 0;
`

const Accent = styled.span`
  color: aqua;
`

const SectionTitle = styled.h2`
  color: aqua;
  font-size: 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0 0 24px 0;
`

const Body = styled(motion.p)`
  color: #ccc;
  font-size: 18px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 0 20px 0;
`

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
}

const About = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <AboutWrapper>
      <Seo title="About" />
      <Canvas
        style={{ position: "fixed" }}
        camera={{ fov: 90, position: [0, 0, 1] }}
      >
        <Stars />
      </Canvas>
      <Content ref={ref}>
        <Section>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span>Hi👋 </span>
            <br />
            <span>I'm </span>
            <Accent>Kriss</Accent>,{"\n"}
            <span>Software Engineer 🤝</span>
          </HeroTitle>
        </Section>

        <Section>
          <Card
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUp}>
              <SectionTitle>Who I am</SectionTitle>
            </motion.div>
            <Body variants={fadeUp}>
              Product-minded full-stack engineer based in Tonbridge, Kent. I
              specialise in large-scale codebase modernisation, performance
              optimisation, and building developer tools that create real
              leverage across engineering teams.
            </Body>
            <Body variants={fadeUp}>
              I've worked across the full stack — from Rails APIs and GraphQL
              schemas to React frontends and CI/CD pipelines — and I care deeply
              about code that is readable, maintainable, and actually ships
              value.
            </Body>
            <Body variants={fadeUp}>
              I also think seriously about how to use AI effectively in
              engineering workflows: knowing when to use it for planning, when
              to let it generate, and how to put the right rules and constraints
              in place so the output stays consistent and trustworthy.
            </Body>
          </Card>
        </Section>

        <Section>
          <Card
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUp}>
              <SectionTitle>Working with AI</SectionTitle>
            </motion.div>
            <Body variants={fadeUp}>
              AI tools have changed how I work — but not by replacing judgment.
              I use AI deliberately: for high-level architecture planning,
              exploring tradeoffs, and accelerating boilerplate. The key is
              knowing when to drive and when to delegate.
            </Body>
            <Body variants={fadeUp}>
              I put structure around it: clear prompts, consistent system
              instructions, project-level rules (like CLAUDE.md or custom GPT
              instructions), and code review gates so AI-generated code meets
              the same bar as hand-written code. The result is genuine speed
              without accumulating hidden technical debt.
            </Body>
          </Card>
        </Section>

        <Section>
          <Card
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUp}>
              <SectionTitle>Background</SectionTitle>
            </motion.div>
            <Body variants={fadeUp}>
              I came into software engineering via a BSc in Creative Music
              Technology at Anglia Ruskin University — where I studied audio
              programming, digital signal processing, and human-computer
              interaction — followed by an intensive bootcamp at Makers Academy
              in London in 2019.
            </Body>
            <Body variants={fadeUp}>
              That non-traditional path gave me a strong instinct for user
              experience and systems thinking that I carry into every
              engineering decision.
            </Body>
          </Card>
        </Section>
      </Content>
    </AboutWrapper>
  )
}

export default About
