import Header from '@/app/components/Header';
import React from 'react';

export default function ProjectDetails({ params }) {
  // Dummy data for demonstration
  const projectData = {
    'recruitment-web-app': {
      title: 'Recruitment Web App',
      description: 'A full-stack recruitment web application built with Next.js, Node.js, Clerk, and MongoDB',
      technologies: [
        { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Clerk', image: 'https://ph-files.imgix.net/297bc3d4-bd2e-4eaa-8fb6-a289cf61ea91.png?auto=format' },
        { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ],
    },
    'project-2': {
      title: 'Project 2',
      description: 'Mobile app developed using React Native and Firebase',
      technologies: [
        { name: 'React Native', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      ],
    },
    'project-3': {
      title: 'Project 3',
      description: 'Machine learning model for predictive analytics',
      technologies: [
        { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'scikit-learn', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      ],
    },
  };

  const project = projectData[params.slug] || {
    title: 'Project Not Found',
    description: 'No description available.',
    technologies: [],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 p-0">
      <Header/>
      <section className="flex flex-col w-full min-h-screen justify-center items-center pt-12 pb-8">
        <h1 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 mt-2">{project.title}</h1>
        <div className="flex flex-col md:flex-row w-full max-w-5xl gap-10 md:gap-20 px-4 md:px-0">
          {/* Description on the left */}
          <div className="flex-1 flex flex-col justify-center items-start bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">{project.description}</p>
          </div>
          {/* Technologies and choices on the right */}
          <div className="flex-1 flex flex-col justify-center items-start bg-gray-100 dark:bg-gray-700 rounded-xl shadow p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Technologies Used</h2>
            <div className="flex flex-wrap gap-6 mb-6">
              {project.technologies.length > 0 ? (
                project.technologies.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center">
                    <img src={tech.image} alt={tech.name} className="w-16 h-16 object-contain mb-2" />
                    <span className="text-sm text-gray-800 dark:text-gray-200">{tech.name}</span>
                  </div>
                ))
              ) : (
                <span className="text-gray-500 dark:text-gray-300">No technologies listed.</span>
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Why these choices?</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {/* You can customize this explanation per project if you wish */}
              These technologies were selected for their modern features, scalability, and strong community support, enabling rapid development and robust performance for this project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// For Next.js app directory routing
export async function generateStaticParams() {
  // Example: return [{ slug: 'recruitment-web-app' }, ...]
  return [];
}
