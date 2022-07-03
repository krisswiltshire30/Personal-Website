import * as React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"
import Seo from "../components/seo"

const Index = () => {

  return (
      <>
        <Seo title="All posts" />
        <Bio />
      </>
  )
}

export default Index