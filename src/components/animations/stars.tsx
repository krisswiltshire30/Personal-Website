import React, { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random"
import { Points as ThreePoints, Color } from "three"

interface StarsProps {
  targetColor?: string
}

const Stars = ({ targetColor = "#ffffff" }: StarsProps) => {
  const pointsRef = useRef<ThreePoints>(null!)
  const [sphere] = useState(
    () => random.inSphere(new Float32Array(3000), { radius: 2 }) as Float32Array
  )
  const currentColor = useRef(new Color("#ffffff"))
  const targetRef = useRef(new Color("#ffffff"))

  useFrame((_state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.x -= delta / 65

    targetRef.current.set(targetColor)
    currentColor.current.lerp(targetRef.current, 0.06)

    const mat = (pointsRef.current as any).material
    if (mat?.color) {
      mat.color.copy(currentColor.current)
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 10]}>
      <Points
        ref={pointsRef}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#ffdd44"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default Stars
