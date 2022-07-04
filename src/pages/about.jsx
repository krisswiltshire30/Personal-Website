import styled from "styled-components"
import * as React from "react"
import { Canvas, useFrame } from 'react-three-fiber'
import { useState, useRef } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import Seo from "../components/seo"

const About = () => {
  const string = 'Hi,\nI\'m Kriss,\nSoftware Engineer'

  const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  `

  const Title = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    z-index: 1;
    margin: 130px 0 0 250px;
    position: absolute;
    font-size: 76px;
    white-space: pre-line;
    line-height: 1;
  `

  const Stars = (props) => {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 2 }))
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 65
    })

    return (
      <group rotation={[0, 0, Math.PI / 10]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial
            transparent
            color="gold"
            size={0.005}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    )
  }

  return (
    <AboutWrapper>
      <Seo title="About" />

      <Title>{string}</Title>
      <Canvas style={{ position: "absolute"}} camera={{ fov: 90, position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </AboutWrapper>
  )
}

export default About
