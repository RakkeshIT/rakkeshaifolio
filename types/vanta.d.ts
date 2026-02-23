declare module "vanta/dist/vanta.dots.min" {
  import * as THREE from "three";

  interface VantaEffect {
    destroy: () => void;
  }

  interface VantaOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    backgroundColor?: number;
    color?: number;
  }

  const VANTA: (options: VantaOptions) => VantaEffect;
  export default VANTA;
}