import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

const Space = ({IsRotating}) => {
    const space = useGLTF(skyScene);
    const spaceRef = useRef();

    useFrame((_,delta) => {
      if(IsRotating) {
        spaceRef.current.rotation.y += 0.21 * delta
      }
    })
  return (
    <mesh ref ={spaceRef}>
        <primitive object={space.scene} />
    </mesh>
  )
}

export default Space