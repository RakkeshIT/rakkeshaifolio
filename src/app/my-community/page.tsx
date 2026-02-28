'use client'
import React, { useRef } from 'react'
import CommunityHero from '../components/pages/My-Community/Hero'
import AboutSection from '../components/pages/My-Community/About'
import OwnersSection from '../components/pages/My-Community/Owner'
import CommunityEndSection from '../components/pages/My-Community/Contact'
import Programs from '../components/pages/My-Community/Programs'

const MyCommunityPage = () => {
  const programRef = useRef<HTMLDivElement>(null!)
  return (
    <div>
     <CommunityHero section={programRef}/>
     <AboutSection/>
     <OwnersSection/>
     <div ref={programRef}>
     <Programs />

     </div>
     <CommunityEndSection/>
    </div>
  )
}

export default MyCommunityPage