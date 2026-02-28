import React from 'react'
import CommunityHero from '../components/pages/My-Community/Hero'
import AboutSection from '../components/pages/My-Community/About'
import OwnersSection from '../components/pages/My-Community/Owner'
import CommunityEndSection from '../components/pages/My-Community/Contact'
import Programs from '../components/pages/My-Community/Programs'

const MyCommunityPage = () => {
  return (
    <div>
     <CommunityHero/>
     <AboutSection/>
     <OwnersSection/>
     <Programs/>
     <CommunityEndSection/>
    </div>
  )
}

export default MyCommunityPage