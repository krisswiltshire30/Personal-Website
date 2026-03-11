import React from "react"
import styled from "styled-components"
import Seo from "../components/seo"

const Page = styled.div`
  padding: 60px;
  max-width: 900px;
  margin: 0 auto;
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
  margin: 0 0 60px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 32px;
  margin-bottom: 60px;
`

const Card = styled.div`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 28px;
`

const CardTitle = styled.h2`
  color: aqua;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0 0 20px 0;
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Tag = styled.span`
  background: #262626;
  border: 1px solid #444;
  color: #ccc;
  font-size: 13px;
  padding: 4px 12px;
  border-radius: 4px;
`

const SectionHeading = styled.h2`
  color: #fff;
  font-size: 24px;
  margin: 0 0 24px 0;
`

const SpecialtyCard = styled.div`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 28px;
`

const SpecialtyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const SpecialtyItem = styled.li`
  color: #ccc;
  font-size: 16px;
  line-height: 1.8;
  padding-left: 20px;
  position: relative;
  &::before {
    content: "→";
    color: aqua;
    position: absolute;
    left: 0;
  }
`

interface SkillGroup {
  category: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Ruby", "Python", "PHP", "HTML/CSS"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Ember.js", "Ruby on Rails", "Node.js", "Gatsby"],
  },
  {
    category: "Tools & Infrastructure",
    skills: ["Git", "GraphQL", "Firebase", "Netlify", "Tailwind CSS", "MySQL", "Drupal"],
  },
  {
    category: "AI & Developer Tooling",
    skills: ["Claude", "ChatGPT", "Cursor", "Prompt Engineering", "AI-assisted planning", "Custom AI rules & constraints"],
  },
]

const specialties = [
  "Performance optimisation and profiling",
  "Large-scale legacy system migration",
  "Component library architecture and documentation",
  "TypeScript adoption across existing codebases",
  "GraphQL API design",
  "Mentoring and technical leadership",
  "Using AI deliberately — planning, generating, and reviewing with guardrails",
]

const Skills = () => {
  return (
    <Page>
      <Seo title="Skills" />
      <PageTitle>Skills</PageTitle>
      <Subtitle>Technologies & Specialties</Subtitle>

      <Grid>
        {skillGroups.map(group => (
          <Card key={group.category}>
            <CardTitle>{group.category}</CardTitle>
            <TagList>
              {group.skills.map(skill => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </TagList>
          </Card>
        ))}
      </Grid>

      <SectionHeading>What I specialise in</SectionHeading>
      <SpecialtyCard>
        <SpecialtyList>
          {specialties.map(s => (
            <SpecialtyItem key={s}>{s}</SpecialtyItem>
          ))}
        </SpecialtyList>
      </SpecialtyCard>
    </Page>
  )
}

export default Skills
