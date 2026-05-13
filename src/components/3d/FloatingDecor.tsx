import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group, Mesh } from 'three'
import * as THREE from 'three'

function Sculpt() {
  const group = useRef<Group>(null)
  const mesh = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t * 0.35) * 0.25, 0.04)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t * 0.28) * 0.12, 0.04)
      group.current.position.y = Math.sin(t * 0.55) * 0.06
    }
    if (mesh.current) {
      mesh.current.position.y = -0.1 + Math.sin(t * 0.6) * 0.05
    }
  })

  return (
    <group ref={group} scale={1.05}>
      <mesh ref={mesh} castShadow position={[0, -0.1, 0]} rotation={[0.35, 0.6, 0]}>
        <capsuleGeometry args={[0.22, 0.55, 8, 24]} />
        <meshPhysicalMaterial
          color="#e8dfd2"
          roughness={0.35}
          metalness={0.05}
          clearcoat={0.35}
          clearcoatRoughness={0.4}
        />
      </mesh>
      <mesh position={[-0.55, 0.15, 0.1]} rotation={[0.2, -0.4, 0.1]}>
        <torusGeometry args={[0.18, 0.04, 16, 48]} />
        <meshStandardMaterial color="#7a7a62" metalness={0.15} roughness={0.45} />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 2]} intensity={0.85} color="#faf7f2" />
      <directionalLight position={[-4, 1, -2]} intensity={0.35} color="#d4c4b0" />
      <Sculpt />
    </>
  )
}

export function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute -right-6 bottom-0 h-[min(52vh,420px)] w-[min(52vw,420px)] md:right-10 md:bottom-10">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        className="h-full w-full"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 3.2]} fov={38} />
        <Scene />
      </Canvas>
    </div>
  )
}
