import * as React from "react"
import styled from "styled-components"
import NavOptions from "./navOptions"
import SocialLinks from "./socialLinks"
import { Link } from "gatsby"

const Sidebar = () => {

  const SidebarWrapper = styled.main`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    justify-content: space-between;
    margin-left: 0;
    width: 200px;
    height: 100%;
    position: fixed;
    z-index: 9999;
    background-color: #262626;
  `

  const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: black;
    height: auto;
  `

  const Logo = styled.div`
    overflow: hidden;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: #262626;
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
  `

  return (
    <SidebarWrapper>

      <Header>
        <Logo>
          <Link to="/">
            <LogoImg src="https://picsum.photos/seed/picsum/200" alt="logo" />
          </Link>
        </Logo>
        <Title>Kriss Wiltshire</Title>
        <span>Software Engineer</span>
      </Header>

      <NavOptions/>

      <SocialLinks/>

    </SidebarWrapper>
  )
}

export default Sidebar
