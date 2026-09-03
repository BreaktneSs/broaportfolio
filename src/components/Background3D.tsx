import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import type { Mesh } from 'three'
import { useTheme } from '../providers/theme'

function Blob() {
  const mesh = useRef<Mesh>(null)
  const { theme } = useTheme()

  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.y += delta * 0.12
    mesh.current.rotation.x += delta * 0.05
  })

  return (
    <Float speed={1.1} rotationIntensity={0.7} floatIntensity={1.4}>
      <mesh ref={mesh} scale={1.75} position={[1.6, -0.2, 0]}>
        <icosahedronGeometry args={[1, 14]} />
        <MeshDistortMaterial
          color={theme === 'dark' ? '#4d7c0f' : '#84cc16'}
          emissive={theme === 'dark' ? '#22d3ee' : '#65a30d'}
          emissiveIntensity={theme === 'dark' ? 0.3 : 0.15}
          roughness={0.08}
          metalness={0.85}
          distort={0.45}
          speed={1.8}
        />
      </mesh>
    </Float>
  )
}

export default function Background3D() {
  const { theme } = useTheme()

  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 7], fov: 42 }}
    >
      <ambientLight intensity={theme === 'dark' ? 0.4 : 0.8} />
      <directionalLight position={[3, 4, 5]} intensity={1.3} />
      <pointLight position={[-5, -3, 2]} intensity={2} color="#22d3ee" />
      <Suspense fallback={null}>
        <Blob />
        <Sparkles
          count={60}
          scale={9}
          size={2}
          speed={0.3}
          opacity={theme === 'dark' ? 0.6 : 0.35}
          color={theme === 'dark' ? '#c8ee85' : '#65a30d'}
        />
      </Suspense>
    </Canvas>
  )
}
