'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

export default function RotatingScene() {


  return (
    <group position={[4,0,0]}>
      
      <mesh position={[3, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh position={[-3, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      <mesh position={[0, 0, 3]}>
        <coneGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>

      <mesh position={[0, 0, -3]}>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshStandardMaterial color="yellow" />
      </mesh>

    </group>
  )
}