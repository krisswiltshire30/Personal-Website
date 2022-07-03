import * as React from "react"
import styled from "styled-components"
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
  z-index: 1;
    background-color: #262626;
  `

  const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: black;
    height: 80px;
  `

  const Options = styled.div`
    display: flex;
    flex-direction: column;
  `

  const Social = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    `

  return (
    <SidebarWrapper >
      <Header>
        <svg viewbox="0 0 100 20">
          <defs>
            <linearGradient id="gradient">
              <stop color="#000" />
            </linearGradient>
            <pattern id="wave" x="0" y="-0.5" width="100%" height="100%" patternUnits="userSpaceOnUse">
              <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="1.5s"
                  type="translate"
                  from="0,0"
                  to="40,0"
                  repeatCount="indefinite" />
              </path>
            </pattern>
          </defs>
          <text text-anchor="middle" x="50" y="15" font-size="17" fill="white" fill-opacity="0.1">LIQUID</text>
          <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)" fill-opacity="1">LIQUID</text>
        </svg>
        <span>Kriss Wiltshire</span>
        <span>Software Engineer</span>
      </Header>
      <Options>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Options>
      <Social>
        <a href="https://twitter.com/krisswiltshire">Twitter</a>
      </Social>
    </SidebarWrapper>
  )
}

export default Sidebar
