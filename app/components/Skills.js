export default function Skills() {
  const technicalSkills = [
      { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
      { name: 'React', level: 85, color: 'bg-blue-400' },
      { name: 'Node.js', level: 80, color: 'bg-green-500' },
      { name: 'Python', level: 75, color: 'bg-blue-600' },
      { name: 'SQL', level: 70, color: 'bg-orange-500' },
      { name: 'Git', level: 85, color: 'bg-red-500' },
  ]

  const softSkills = [
      { name: 'Communication', level: 95, color: 'bg-teal-500' },
      { name: 'Team Leadership', level: 85, color: 'bg-blue-500' },
      { name: 'Problem Solving', level: 90, color: 'bg-green-500' },
      { name: 'Time Management', level: 85, color: 'bg-orange-500' },
      { name: 'Adaptability', level: 90, color: 'bg-cyan-500' },
      { name: 'Collaboration', level: 95, color: 'bg-emerald-500' },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      <section id="skills" className="py-24 lg:py-32 bg-white dark:bg-gray-900 min-h-screen flex flex-col justify-center scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center text-gray-900 dark:text-white">Skills & Expertise</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
              </div>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h4>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out group-hover:opacity-90`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Soft Skills</h3>
              </div>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h4>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out group-hover:opacity-90`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
