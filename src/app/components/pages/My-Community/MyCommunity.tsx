"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type VantaEffect = {
  destroy: () => void;
};

type VantaDots = (options: {
  el: HTMLElement;
  THREE: typeof THREE;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  backgroundColor?: number;
  color?: number;
}) => VantaEffect;

export default function MyCommunityBg3D() {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let effect: VantaEffect | null = null;

    const init = async () => {
      if (!vantaRef.current) return;

      const VANTA = (await import(
        "vanta/dist/vanta.dots.min"
      )).default as unknown as VantaDots;

      effect = VANTA({
        el: vantaRef.current,
        THREE: THREE, // ✅ REQUIRED
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        backgroundColor: 0x23153c,
        color: 0xff3f81,
      });
    };

    init();

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 -z-10"
    />
  );
}