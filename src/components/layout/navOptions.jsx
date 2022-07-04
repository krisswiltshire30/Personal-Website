import React, {useState}  from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Options = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(props => <Link {...props} />)`
  position: relative;
  display: flex;
  margin-top: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: gray;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
`

const LinkBackground = styled.div`
  ${console.log()}
  position: absolute;
  text-align: center;
  margin-left: -60px;
  border-top: 50px solid aqua;
  border-right: 60px solid transparent;
  opacity: 0.4;
  left: 0;
  top: 0;
  height: 100%;
  z-index: -1;
  transition: ease-in-out width 0.5s;
  width: ${props => props.selectedOption === props.id ? "160%" : "0"};
  ${StyledLink}:hover & {
    width: 160%;
  }
`

const NavOptions = () => {
  const [selectedOption, setSelectedOption] = useState("")


  const handleClick = (e) => {
    setSelectedOption(e.target.id)
  }

  return (
    <Options>
      <StyledLink id="about" to="/about" activeStyle={{ backgroundColor: "#00FFFF99", color: "#fff " }} onClick={(e) => handleClick(e)} >
        About
        <LinkBackground id="about" selectedOption={selectedOption}/>
      </StyledLink>
      <StyledLink id="skills" to="/skills" activeStyle={{ backgroundColor: "#00FFFF99", color: "#fff " }} onClick={(e) => handleClick(e)} >
        Skills
        <LinkBackground id="skills" selectedOption={selectedOption}/>
      </StyledLink>
      <StyledLink id="work" to="/work" activeStyle={{ backgroundColor: "#00FFFF99", color: "#fff " }} onClick={(e) => handleClick(e)}>
        Work
        <LinkBackground id="work" selectedOption={selectedOption}/>
      </StyledLink>
      <StyledLink id="blog" to="/blog" activeStyle={{ backgroundColor: "#00FFFF99", color: "#fff " }} onClick={(e) => handleClick(e)}>
        Blog
        <LinkBackground id="blog" selectedOption={selectedOption}/>
      </StyledLink>
      <StyledLink id="contact" to="/contact" activeStyle={{ backgroundColor: "#00FFFF99", color: "#fff " }} onClick={(e) => handleClick(e)}>
        Contact
        <LinkBackground id="contact" selectedOption={selectedOption}/>
      </StyledLink>
    </Options>
  )
}

export default NavOptions
