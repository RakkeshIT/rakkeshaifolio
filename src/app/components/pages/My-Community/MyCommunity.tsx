"use client";

import { useEffect, useRef } from "react";
import type * as THREEType from "three";

declare global {
  interface Window {
    THREE: typeof THREEType;
  }
}

 type VantaOptions =  {
    el: HTMLElement;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    backgroundColor?: number;
    color?: number;
  }

export default function MyCommunityBg3D() {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let effect: { destroy: () => void } | null = null;

    const init = async () => {
      if (!vantaRef.current) return;

      // 1️⃣ Import THREE
      const THREEImport = await import("three");
      const THREE = THREEImport.default ?? THREEImport;

      // 2️⃣ Attach to window (typed)
      window.THREE = THREE as typeof THREEType;

      // 3️⃣ Import Vanta AFTER attaching THREE
      const VANTA = (await import("vanta/dist/vanta.dots.min")).default as unknown as VantaOptions;

      // 4️⃣ Initialize
      effect = VANTA({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        backgroundColor: 0x23153c,
        color: 0xff3f81,
      });
    };

    init();

    return () => {
      if (effect) {
        effect.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{ height: "100vh", width: "100%" }}
    />
  );
}