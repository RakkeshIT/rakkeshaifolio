'use client'
import CourseCard from '@/app/components/pages/courses/CourseCard'
import Hero3D from '@/app/components/pages/courses/Hero3D'
import React, { useRef } from 'react'

const CourseList = () => {
  const courseRef = useRef<HTMLDivElement>(null!)
  return (
    <div>
      <Hero3D section={{ courseRef }} />

      <div ref={courseRef}>
        <CourseCard />

      </div>
    </div>
  )
}

export default CourseList