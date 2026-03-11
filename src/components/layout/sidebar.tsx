import React, { useState } from "react"
import styled from "styled-components"
import NavOptions from "./navOptions"
import SocialLinks from "./socialLinks"
import { Link } from "gatsby"

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: space-between;
  width: 200px;
  height: 100%;
  position: fixed;
  z-index: 9999;
  background-color: #262626;

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    top: 0;
    left: 0;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: black;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 0;
    gap: 12px;
    background-color: transparent;
  }
`

const Logo = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #262626;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`

const LogoImg = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.span`
  font-weight: bold;
  color: white;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 0;
    font-size: 14px;
  }
`

const DesktopOnly = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const Hamburger = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Bar = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
`

const MobileMenu = styled.div<React.HTMLAttributes<HTMLDivElement> & { open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${p => p.open ? "flex" : "none"};
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background: #262626;
    flex-direction: column;
    z-index: 9998;
    padding-bottom: 16px;
  }
`

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <SidebarWrapper>
        <Header>
          <Logo>
            <Link to="/">
              <LogoImg src="/avatar.png" alt="Kriss Wiltshire" />
            </Link>
          </Logo>
          <Title>Kriss Wiltshire</Title>
          <DesktopOnly>
            <span style={{ color: "#aaa", fontSize: "13px" }}>Software Engineer</span>
          </DesktopOnly>
        </Header>

        <DesktopOnly>
          <NavOptions />
        </DesktopOnly>

        <DesktopOnly>
          <SocialLinks />
        </DesktopOnly>

        <Hamburger onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
      </SidebarWrapper>

      <MobileMenu open={menuOpen} onClick={() => setMenuOpen(false)}>
        <NavOptions />
        <SocialLinks />
      </MobileMenu>
    </>
  )
}

export default Sidebar
