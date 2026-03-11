import React, { useEffect } from "react"
import { navigate } from "gatsby"

const Index = () => {
  useEffect(() => {
    navigate("/about")
  }, [])

  return null
}

export default Index
