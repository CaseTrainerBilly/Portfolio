import Image from 'next/image'

export default function Projects() {
  const projects = [
    { 
      title: 'Recruitment Web App', 
      description: 'A full-stack recruitment web application built with Next.js, Node.js, Clerk, and MongoDB',
      image: '/Images/_Transparent logo.png', // Changed to correct public path
      link: 'https://github.com/yourusername/project1'
    },
    { 
      title: 'Project 2', 
      description: 'Mobile app developed using React Native and Firebase',
      image: 'https://picsum.photos/seed/project2/400/400', // Changed to square image
      link: 'https://github.com/yourusername/project2'
    },
    { 
      title: 'Project 3', 
      description: 'Machine learning model for predictive analytics',
      image: 'https://picsum.photos/seed/project3/400/400', // Changed to square image
      link: 'https://github.com/yourusername/project3'
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">Featured Projects</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="w-[400px] h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden mx-auto">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={index === 0 ? 340 : 400} 
                  height={index === 0 ? 340 : 400} 
                  className={`object-cover transition-transform duration-300 group-hover:scale-105 ${index === 0 ? 'ml-[-16px]' : ''}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    Details
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}