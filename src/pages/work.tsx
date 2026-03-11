import React from "react"
import styled from "styled-components"
import Seo from "../components/seo"

export const Head = () => <Seo title="Work" />

const Page = styled.div`
  padding: 60px;
  max-width: 900px;
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
  margin: 0 0 60px 0;
`

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 72px;
`

const Job = styled.div`
  border-left: 2px solid aqua;
  padding-left: 28px;
`

const JobHeader = styled.div`
  margin-bottom: 16px;
`

const JobTitle = styled.h2`
  color: #fff;
  font-size: 22px;
  margin: 0 0 4px 0;
`

const JobMeta = styled.p`
  color: aqua;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
`

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Bullet = styled.li`
  color: #ccc;
  font-size: 15px;
  line-height: 1.7;
  padding-left: 20px;
  margin-bottom: 8px;
  position: relative;
  &::before {
    content: "→";
    color: aqua;
    position: absolute;
    left: 0;
  }
`

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 28px;
  margin: 0 0 32px 0;
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`

const ProjectCard = styled.div`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 28px;
`

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  margin: 0 0 12px 0;
`

const ProjectDesc = styled.p`
  color: #ccc;
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
`

interface JobEntry {
  title: string
  company: string
  period: string
  bullets: string[]
}

const jobs: JobEntry[] = [
  {
    title: "Senior Software Engineer",
    company: "Zapnito",
    period: "Oct 2021 – Present",
    bullets: [
      "Orchestrated comprehensive migration of Rails codebase to fully-typed TypeScript — 70% complete ahead of schedule, 65% reduction in runtime errors, zero downtime",
      "Architected topics taxonomy system replacing fragmented legacy taxonomies with a unified hierarchical structure using closure tree and polymorphic associations, serving 25K+ daily users via GraphQL and React",
      "Built a 200+ component library adopted across the engineering and design team, cutting UI development time by 50%",
      "Led enterprise feature delivery that retained major accounts worth £500K+ annual value through direct stakeholder collaboration",
      "Improved developer productivity by 40% through comprehensive type safety and IDE tooling improvements enabling 5x faster refactoring",
    ],
  },
  {
    title: "Lead Developer",
    company: "VoiceBox",
    period: "Mar 2020 – Oct 2021",
    bullets: [
      "Led frontend infrastructure using React, Gatsby, and GraphQL for an international youth platform serving 50K+ users across 15 countries",
      "Optimised GraphQL data retrieval patterns, reducing API response times by 35%",
      "Managed CI/CD via Netlify achieving 99.8% uptime and 3× daily deployment frequency",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "ParentZone",
    period: "Mar 2020 – Oct 2021",
    bullets: [
      "Built frontend and backend features in PHP, JavaScript, Drupal, and MySQL for a platform serving 100K+ families",
      "Designed custom Drupal modules and themes improving user experience metrics by 20%",
      "Optimised database queries reducing page load times by 30% across 500K+ user records",
    ],
  },
]

interface ProjectEntry {
  title: string
  description: string
}

const projects: ProjectEntry[] = [
  {
    title: "Rails → TypeScript Migration Tooling",
    description:
      "Developed automated tooling to convert Rails views into React/TypeScript components, reducing manual effort by 80%. Created migration documentation and best practices adopted across multiple engineering teams.",
  },
  {
    title: "Performance Optimisation Initiative",
    description:
      "Identified critical performance bottlenecks through customer usage analysis. Implemented intelligent caching and database optimisation strategies with measurable improvements to UX metrics.",
  },
  {
    title: "Component Library Architecture",
    description:
      "Researched and designed a scalable component system serving as the foundation for all new feature development. Established documentation standards that improved developer onboarding and reduced support requests.",
  },
]

const Work = () => {
  return (
    <Page>
<PageTitle>Work</PageTitle>
      <Subtitle>Experience & Projects</Subtitle>

      <JobList>
        {jobs.map(job => (
          <Job key={job.company}>
            <JobHeader>
              <JobTitle>{job.title}</JobTitle>
              <JobMeta>
                {job.company} · {job.period}
              </JobMeta>
            </JobHeader>
            <BulletList>
              {job.bullets.map((b, i) => (
                <Bullet key={i}>{b}</Bullet>
              ))}
            </BulletList>
          </Job>
        ))}
      </JobList>

      <SectionTitle>Key Projects</SectionTitle>
      <ProjectGrid>
        {projects.map(p => (
          <ProjectCard key={p.title}>
            <ProjectTitle>{p.title}</ProjectTitle>
            <ProjectDesc>{p.description}</ProjectDesc>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Page>
  )
}

export default Work
