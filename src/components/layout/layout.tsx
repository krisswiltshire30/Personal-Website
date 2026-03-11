import React from "react"
import styled from "styled-components"
import Sidebar from "./sidebar"

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Main = styled.main`
  flex: 1;
  margin-left: 200px;
  overflow: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 60px;
  }
`

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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
