'use client'
import WebinarCards from '@/app/components/pages/Webinars/Cards'
import WebinarHome from '@/app/components/pages/Webinars/Home'
import React, { useRef } from 'react'

const WebinarIntro = () => {
  const cardRef = useRef<HTMLDivElement>(null!)
  return (
    <div>
        <WebinarHome section={{cardRef}}/>
        <div ref={cardRef}>
        <WebinarCards />
        </div>
    </div>
  )
}

export default WebinarIntro