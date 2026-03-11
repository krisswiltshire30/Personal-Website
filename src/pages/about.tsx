import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"
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

const Content = styled.div<{
  children?: React.ReactNode
  ref?: React.Ref<HTMLDivElement>
}>`
  z-index: 1;
  position: absolute;
  width: calc(100vw - 200px);
  left: 200px;

  @media (max-width: 768px) {
    width: 100vw;
    left: 0;
  }
`

const Section = styled.section<React.HTMLAttributes<HTMLElement> & { "data-section"?: string }>`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 24px 16px;
    min-height: calc(100vh - 60px);
  }
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

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`

const HeroTitle = styled(motion.h1)`
  font-weight: bold;
  color: #fff;
  font-size: 76px;
  white-space: pre-line;
  line-height: 1;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 44px;
  }
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

const ReadMore = styled(Link)`
  display: inline-block;
  margin-top: 8px;
  color: aqua;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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

const sectionColors: Record<string, string> = {
  hero: "#ffffff",
  "who-i-am": "#ffdd44",
  background: "#aa44ff",
  "working-with-ai": "#00ff66",
}

const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [starColor, setStarColor] = useState("#ffdd44")

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const key = (entry.target as HTMLElement).dataset.section ?? "hero"
            setStarColor(sectionColors[key] ?? "#ffdd44")
          }
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <AboutWrapper>
      <Seo title="About" />
      <Canvas
        style={{ position: "fixed" }}
        camera={{ fov: 90, position: [0, 0, 1] }}
      >
        <Stars targetColor={starColor} />
      </Canvas>
      <Content ref={ref}>
        <Section data-section="hero">
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

        <Section data-section="who-i-am">
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

        <Section data-section="background">
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
              interaction.
            </Body>
            <Body variants={fadeUp}>
              After graduating I moved into IT, working my way up from helpdesk
              through to network support — which gave me a solid grounding in
              how systems actually work under the hood. From there I pivoted
              into software engineering, completing an intensive bootcamp at
              Makers Academy in London in 2019.
            </Body>
            <Body variants={fadeUp}>
              That non-traditional path gave me a strong instinct for user
              experience and systems thinking that I carry into every
              engineering decision.
            </Body>
            <Body variants={fadeUp}>
              Over the past 6+ years I've learned that the best engineers don't
              just write good code — they understand why they're writing it.
              I've sat in customer research sessions, shaped feature specs,
              pushed back on requirements that didn't serve users, and shipped
              things that measurably moved the needle. Technical decisions are
              business decisions, and I've never lost sight of that.
            </Body>
          </Card>
        </Section>

        <Section data-section="working-with-ai">
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
              AI hasn't replaced engineers — it's removed the friction between
              having an idea and testing it. I use it deliberately across the
              full development lifecycle: spiking ideas, rubber-ducking
              architecture, planning work, and accelerating legacy migrations.
              The craft is knowing when to reach for it and when to put it down.
            </Body>
            <motion.div variants={fadeUp}>
              <ReadMore to="/blog/using-ai-as-an-engineer/">
                Read my full thoughts on engineering with AI →
              </ReadMore>
            </motion.div>
          </Card>
        </Section>
      </Content>
    </AboutWrapper>
  )
}

export default About
