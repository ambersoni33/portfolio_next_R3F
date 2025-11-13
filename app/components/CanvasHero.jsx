'use client'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import RotatingScene from './RotationScene'

export const CanvasHero = () =>{
    return(
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <RotatingScene/>
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 0, 10]} />  
            <OrbitControls />         
        </Canvas>
    )
}