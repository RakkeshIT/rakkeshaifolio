import React from 'react'

const Skill = () => {
  return (
   <div className="min-h-screen w-full px-6 py-12">
  <div className="max-w-6xl mx-auto">

    {/* Page Title */}
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
      My <span className="text-indigo-500">Skills & Tools</span>
    </h1>

    {/* Skills Section */}
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Skills</h2>
      <div className="flex flex-wrap gap-6">
        {/* Replace with your icons */}
        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">JS</div>
        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">React</div>
        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">Node</div>
        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">Python</div>
        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">TypeScript</div>
      </div>
    </section>

    {/* Tools Section */}
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Tools</h2>
      <div className="flex flex-wrap gap-6">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">VS</div>
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">Git</div>
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">Docker</div>
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">Figma</div>
      </div>
    </section>

    {/* Platforms Section */}
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Platforms</h2>
      <div className="flex flex-wrap gap-6">
        <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center">AWS</div>
        <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center">Firebase</div>
        <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center">Supabase</div>
      </div>
    </section>

  </div>
</div>


  )
}

export default Skill