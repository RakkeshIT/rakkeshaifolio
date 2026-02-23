"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type VantaEffect = {
  destroy: () => void;
};

export default function MyCommunityBg3D() {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let effect: VantaEffect | null = null;

    const initVanta = async () => {
      if (!vantaRef.current) return;

      const VANTA = (await import("vanta/dist/vanta.dots.min")).default;

      effect = VANTA({
        el: vantaRef.current,
        THREE: THREE, // ✅ IMPORTANT FIX
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        backgroundColor: 0x23153c,
        color: 0xff6b00,
      });
    };

    initVanta();

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
}