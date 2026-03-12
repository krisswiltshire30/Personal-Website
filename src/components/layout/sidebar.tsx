import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
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

const LogoImg = styled.img`
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

const Hamburger = styled.button`
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

const Bar = styled.span<{ open?: boolean; index?: number }>`
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  transition: transform 0.25s ease, opacity 0.25s ease;

  ${p => p.open && p.index === 0 && `transform: translateY(7px) rotate(45deg);`}
  ${p => p.open && p.index === 1 && `opacity: 0;`}
  ${p => p.open && p.index === 2 && `transform: translateY(-7px) rotate(-45deg);`}
`

const Backdrop = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 9997;
  }
`

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [menuOpen])

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
          <Bar open={menuOpen} index={0} />
          <Bar open={menuOpen} index={1} />
          <Bar open={menuOpen} index={2} />
        </Hamburger>
      </SidebarWrapper>

      <AnimatePresence>
        {menuOpen && (
          <>
            <Backdrop onClick={() => setMenuOpen(false)} />
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                position: "fixed",
                top: 60,
                left: 0,
                width: "100%",
                background: "#262626",
                flexDirection: "column",
                zIndex: 9998,
                paddingBottom: 16,
                display: "flex",
              }}
            >
              <NavOptions onNavigate={() => setMenuOpen(false)} />
              <SocialLinks />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar
