import React from "react"
import styled from "styled-components"
import Seo from "../components/seo"

export const Head = () => <Seo title="Skills" />

const Page = styled.div`
  padding: 60px;
  max-width: 960px;
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
  margin: 0 0 16px 0;
`

const Intro = styled.p`
  color: #aaa;
  font-size: 17px;
  line-height: 1.7;
  max-width: 680px;
  margin: 0 0 56px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 56px;
`

const Card = styled.div`
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 14px;
  padding: 28px;
  transition: border-color 0.2s ease;
  &:hover {
    border-color: #00ffff44;
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`

const CardIcon = styled.span`
  font-family: "Material Symbols Rounded";
  font-size: 22px;
  color: aqua;
  line-height: 1;
`

const CardTitle = styled.h2`
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Tag = styled.span`
  background: #262626;
  border: 1px solid #383838;
  color: #bbb;
  font-size: 13px;
  padding: 4px 12px;
  border-radius: 20px;
`

const SectionHeading = styled.h2`
  color: #fff;
  font-size: 22px;
  margin: 0 0 8px 0;
`

const SectionSubtitle = styled.p`
  color: #666;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 28px 0;
`

const SpecialtyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 56px;
`

const SpecialtyCard = styled.div`
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  transition: border-color 0.2s ease;
  &:hover {
    border-color: #00ffff44;
  }
`

const SpecialtyIcon = styled.span`
  font-family: "Material Symbols Rounded";
  font-size: 20px;
  color: aqua;
  line-height: 1;
  margin-top: 2px;
  flex-shrink: 0;
`

const SpecialtyText = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const SpecialtyTitle = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
`

const SpecialtyDesc = styled.span`
  color: #777;
  font-size: 13px;
  line-height: 1.5;
`

const EngagementSection = styled.div`
  background: linear-gradient(135deg, #0d1f1f 0%, #111 100%);
  border: 1px solid #00ffff22;
  border-radius: 14px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`

const EngagementTitle = styled.h2`
  color: #fff;
  font-size: 22px;
  margin: 0 0 4px 0;
`

const EngagementBody = styled.p`
  color: #999;
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 20px 0;
  max-width: 580px;
`

const EngagementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const EngagementItem = styled.li`
  color: #ccc;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  &::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: aqua;
    flex-shrink: 0;
  }
`

interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "terminal",
    skills: [
      "TypeScript",
      "JavaScript",
      "Ruby",
      "Python",
      "PHP",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    category: "Frontend",
    icon: "web",
    skills: [
      "React",
      "Ember.js",
      "Gatsby",
      "Next.js",
      "Tailwind CSS",
      "styled-components",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    icon: "dns",
    skills: [
      "Ruby on Rails",
      "Node.js",
      "GraphQL",
      "REST APIs",
      "Sidekiq",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    category: "Infrastructure & Tooling",
    icon: "build",
    skills: [
      "Git",
      "Firebase",
      "Netlify",
      "Heroku",
      "CI/CD",
      "Webpack",
      "Vite",
      "Drupal",
    ],
  },
  {
    category: "AI & Automation",
    icon: "smart_toy",
    skills: [
      "Claude",
      "ChatGPT",
      "Cursor",
      "Prompt Engineering",
      "AI-assisted planning",
      "Custom guardrails & rules",
      "Claude Code",
    ],
  },
  {
    category: "Product & Process",
    icon: "groups",
    skills: [
      "Agile / Scrum",
      "Technical spec writing",
      "Code review",
      "Mentoring",
      "Customer research",
      "Feature scoping",
    ],
  },
]

interface Specialty {
  icon: string
  title: string
  desc: string
}

const specialties: Specialty[] = [
  {
    icon: "rocket_launch",
    title: "Large-scale legacy migration",
    desc: "Moving monoliths to modern stacks without breaking production.",
  },
  {
    icon: "speed",
    title: "Performance optimisation",
    desc: "Profiling, identifying bottlenecks, and shipping measurable gains.",
  },
  {
    icon: "hub",
    title: "Component library architecture",
    desc: "Building design systems that scale across teams and products.",
  },
  {
    icon: "code_blocks",
    title: "TypeScript adoption",
    desc: "Incrementally typing existing codebases with minimal disruption.",
  },
  {
    icon: "schema",
    title: "GraphQL API design",
    desc: "Schemas that are expressive, consistent, and easy to extend.",
  },
  {
    icon: "precision_manufacturing",
    title: "AI-augmented engineering",
    desc: "Using AI deliberately across planning, generation, and review — with guardrails.",
  },
  {
    icon: "person_raised_hand",
    title: "Technical leadership",
    desc: "Mentoring engineers, shaping technical direction, and aligning with product.",
  },
  {
    icon: "security",
    title: "Code quality & review",
    desc: "Raising standards across teams through consistent, constructive review culture.",
  },
]

const Skills = () => {
  return (
    <Page>
      <PageTitle>Skills</PageTitle>
      <Subtitle>Technologies & Specialties</Subtitle>
      <Intro>
        6+ years shipping production software across full-stack web — from Rails
        APIs and GraphQL schemas to React frontends and CI/CD pipelines. I bring
        technical depth and product instinct in equal measure.
      </Intro>

      <SectionHeading>Technologies</SectionHeading>
      <SectionSubtitle>What I work with day-to-day</SectionSubtitle>
      <Grid>
        {skillGroups.map(group => (
          <Card key={group.category}>
            <CardHeader>
              <CardIcon>{group.icon}</CardIcon>
              <CardTitle>{group.category}</CardTitle>
            </CardHeader>
            <TagList>
              {group.skills.map(skill => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </TagList>
          </Card>
        ))}
      </Grid>

      <SectionHeading>Specialties</SectionHeading>
      <SectionSubtitle>Where I add the most value</SectionSubtitle>
      <SpecialtyGrid>
        {specialties.map(s => (
          <SpecialtyCard key={s.title}>
            <SpecialtyIcon>{s.icon}</SpecialtyIcon>
            <SpecialtyText>
              <SpecialtyTitle>{s.title}</SpecialtyTitle>
              <SpecialtyDesc>{s.desc}</SpecialtyDesc>
            </SpecialtyText>
          </SpecialtyCard>
        ))}
      </SpecialtyGrid>

      {/* <EngagementSection>
        <EngagementTitle>Available for engagements</EngagementTitle>
        <EngagementBody>
          I take on select freelance and contract work. If you need someone who can hit the ground
          running, work across the stack, and deliver — let's talk.
        </EngagementBody>
        <EngagementList>
          <EngagementItem>Short-term contracts and sprint support</EngagementItem>
          <EngagementItem>Legacy codebase audits and migration planning</EngagementItem>
          <EngagementItem>Frontend architecture and component systems</EngagementItem>
          <EngagementItem>AI tooling integration and workflow design</EngagementItem>
        </EngagementList>
      </EngagementSection> */}
    </Page>
  )
}

export default Skills
