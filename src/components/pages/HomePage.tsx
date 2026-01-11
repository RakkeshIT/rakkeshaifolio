'use client'
import React from 'react'
import { InteractiveGridPattern } from '../ui/interactive-grid-pattern'
import { cn } from '@/lib/utils'

const HomePage = () => {
  return (
   <>
   <div className="bg-background relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg">
  {/* Background Grid */}
  <InteractiveGridPattern
    className={cn(
      "absolute inset-0 z-0",
      "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
      "h-[200%] skew-y-12"
    )}
  />

  {/* Foreground Content */}
  <div className="relative z-10 text-center">
    <h1 className="text-5xl font-bold text-foreground">
      HomePage
    </h1>
  </div>
</div>

   </>
  )
}

export default HomePage