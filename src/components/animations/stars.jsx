import * as React from "react"
import { useFrame } from 'react-three-fiber'
import { useState, useRef } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const pointsRef = useRef()
  const materialRef = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 2 }))

  useFrame((_state, delta) => {
    pointsRef.current.rotation.x -= delta / 65
  })

    return (
      <group rotation={[0, 0, Math.PI / 10]}>
        <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial
            style={{transition: 'ease-in-out'}}
            ref={materialRef}
            transparent
            color="yellow"
            size={0.005}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    )
}

export default Stars
