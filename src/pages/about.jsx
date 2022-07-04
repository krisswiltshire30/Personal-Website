import styled from "styled-components"
import * as React from "react"
import { Canvas, useFrame} from 'react-three-fiber'
import { useState, useRef } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import Seo from "../components/seo"

const About = () => {

  function Stars(props) {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 100
    })
    return (
      <group rotation={[0, 0, Math.PI / 10]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial transparent color="yellow" size={0.005} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    )
  }

  return (

        <div style={{ width: "100vw", height: "100vh" }}>
          <Seo title="About" />
          <Canvas camera={{ position: [0, 0, 2] }}>
            <Stars />
          </Canvas>
        </div>

  )
}

export default About
