'use client'
import React, { useRef } from 'react'
import ExperienceHero from '../components/ExperiencPages/ExperienceHero'
import IndustryExperience from '../components/ExperiencPages/IndustryExperience'
import TechTalkSection from '../components/ExperiencPages/TechTalkSection'

const Experience = () => {
    const industry = useRef<HTMLDivElement>(null)
    const techTalk = useRef<HTMLDivElement>(null!)
  return (
    <>
    <div>
        <ExperienceHero section={{  industry, techTalk}}/>
    </div>
    <div ref={industry}>
        <IndustryExperience/>
    </div>

    <div ref={techTalk}>
      <TechTalkSection/>
    </div>
    </>
  )
}

export default Experience