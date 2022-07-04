import * as React from "react"
import styled from "styled-components"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {

  const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `

  const Main = styled.main`
    flex: 1;
    margin-left: 200px;
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
