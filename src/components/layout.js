import * as React from "react"
import styled from "styled-components"
import Sidebar from "./sidebar"
import { Link } from "gatsby"

const Layout = ({ children }) => {

  const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  `

  const Main = styled.main`
    margin-left: 200px;
    padding: 20px;
    overflow: auto;
  `

  return (
    <LayoutWrapper>
      <Sidebar />
      <Main>
        <header className="global-header">
          <h1 className="main-heading">
            <Link to="/">Kriss Wiltshire</Link>
          </h1>
        </header>
        {children}
      </Main>
    </LayoutWrapper>
  )
}

export default Layout
