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
      { name: 'Communication', level: 95, color: 'bg-purple-500' },
      { name: 'Team Leadership', level: 85, color: 'bg-indigo-500' },
      { name: 'Problem Solving', level: 90, color: 'bg-teal-500' },
      { name: 'Time Management', level: 85, color: 'bg-pink-500' },
      { name: 'Adaptability', level: 90, color: 'bg-emerald-500' },
      { name: 'Collaboration', level: 95, color: 'bg-cyan-500' },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      <section id="skills" className="py-20 bg-white dark:bg-gray-900 min-h-screen flex flex-col justify-start pt-8 md:pt-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 dark:bg-gray-600"></div>
          
          {/* Technical Skills */}
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className={`${skill.color} h-2.5 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className={`${skill.color} h-2.5 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}