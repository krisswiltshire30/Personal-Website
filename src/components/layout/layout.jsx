import * as React from "react"
import styled from "styled-components"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {

  const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  `

  const Main = styled.main`
    padding: 30px 0 30px 0;
    margin: 0 40px 0 240px;
    overflow: auto;
  `

  return (
    <LayoutWrapper>
      <Sidebar />
      <Main>
        {children}
      </Main>
    </LayoutWrapper>
  )
}

export default Layout
