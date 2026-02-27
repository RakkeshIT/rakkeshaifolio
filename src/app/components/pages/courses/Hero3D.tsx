"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Text3D,
  OrbitControls,
  Center,
  Float,
  Stars,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

function RotatingV() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  useFrame((state) => {
    const { mouse, clock } = state;

    if (meshRef.current) {
      meshRef.current.rotation.y =
        mouse.x * Math.PI + clock.elapsedTime * 0.4;

      meshRef.current.rotation.x = mouse.y * 0.5;

      meshRef.current.position.y =
        Math.sin(clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <Center>
        <Text3D
          ref={meshRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={viewport.width < 6 ? 1.8 : 3.2} // Responsive 3D size
          height={0.8}
          bevelEnabled
          bevelThickness={0.06}
          bevelSize={0.04}
          bevelSegments={5}
        >
          V
          <meshPhysicalMaterial
            color="#ff7a18"
            metalness={1}
            roughness={0.15}
            clearcoat={1}
            emissive="#ff7a18"
            emissiveIntensity={0.6}
          />
        </Text3D>
      </Center>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-10 lg:px-20 py-20 bg-black text-white overflow-hidden">
      
      {/* LEFT CONTENT */}
      <div className="max-w-xl text-center lg:text-left space-y-6 z-10">
        <h1 className="text-4xl sm:text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          My <span className="text-orange-500">Community</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Empowering developers with modern courses,
          innovation, and future-ready skills.
        </p>

        <button className="bg-gradient-to-r from-orange-500 to-yellow-400 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transition duration-300 shadow-xl shadow-orange-500/30">
          Explore Courses
        </button>
      </div>

      {/* RIGHT 3D */}
      <div className="w-full lg:w-1/2 h-[350px] sm:h-[450px] md:h-[500px] lg:h-[650px] mt-12 lg:mt-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[-5, -5, -5]} intensity={1.5} color="#ff7a18" />

          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            fade
            speed={1}
          />

          <RotatingV />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,122,24,0.15),transparent_50%)] animate-pulse pointer-events-none" />
    </section>
  );
}