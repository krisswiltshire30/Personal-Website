import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Options = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLink = styled((props: React.ComponentProps<typeof Link>) => (
  <Link {...props} />
))`
  position: relative;
  display: flex;
  margin-top: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 10px 20px 10px 50px;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px 20px;
  }
  color: gray;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
`

interface LinkBackgroundProps {
  selectedOption: string
  id: string
}

const LinkBackground = styled.div<LinkBackgroundProps>`
  position: absolute;
  text-align: center;
  margin-left: -60px;
  border-top: 50px solid aqua;
  border-right: 60px solid transparent;
  opacity: 0.4;
  left: 0;
  top: 0;
  height: 100%;
  z-index: -1;
  transition: ease-in-out width 0.5s;
  width: ${props => (props.selectedOption === props.id ? "160%" : "0")};
  ${StyledLink}:hover & {
    width: 160%;
  }
`

const Icon = styled.span`
  font-family: "Material Symbols Rounded";
  font-size: 20px;
  font-weight: 300;
  line-height: 1;
  font-style: normal;
  letter-spacing: normal;
  text-transform: none;
  user-select: none;
  white-space: nowrap;
  word-wrap: normal;
  -webkit-font-smoothing: antialiased;
  width: 24px;
  text-align: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: auto;
  }
`

const navItems = [
  { id: "about", to: "/about", label: "About", icon: "person" },
  { id: "skills", to: "/skills", label: "Skills", icon: "code" },
  { id: "work", to: "/work", label: "Work", icon: "work" },
  { id: "blog", to: "/blog", label: "Blog", icon: "edit_note", partial: true },
  { id: "contact", to: "/contact", label: "Contact", icon: "mail" },
]

interface NavOptionsProps {
  onNavigate?: () => void
}

const NavOptions = ({ onNavigate }: NavOptionsProps) => {
  const [selectedOption, setSelectedOption] = useState("")

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setSelectedOption((e.currentTarget as HTMLAnchorElement).id)
    onNavigate?.()
  }

  return (
    <Options>
      {navItems.map(item => (
        <StyledLink
          key={item.id}
          id={item.id}
          to={item.to}
          activeStyle={{ backgroundColor: "#00FFFF99", color: "#fff" }}
          partiallyActive={item.partial}
          onClick={handleClick}
        >
          <Icon>{item.icon}</Icon>
          {item.label}
          <LinkBackground id={item.id} selectedOption={selectedOption} />
        </StyledLink>
      ))}
    </Options>
  )
}

export default NavOptions
