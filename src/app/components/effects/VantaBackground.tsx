"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type VantaEffect = {
  destroy: () => void;
};

type VantaGlobe = (options: {
  el: HTMLElement;
  THREE: typeof import("three");
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  backgroundColor?: number;
  color?: number;
}) => VantaEffect;

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaEffect: VantaEffect | null = null;

    const loadVanta = async () => {
      if (!vantaRef.current) return;

      const modules = await import("../../../../vanta/dist/vanta.globe.min");
      const GLOBE = modules.default as unknown as  VantaGlobe;

      vantaEffect = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        backgroundColor: 0x23153c,
        color: 0xff3f81,
      });
    };

    loadVanta();

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
}