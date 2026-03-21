import Header from '@/app/components/Header';
import ProjectDetailsClient from './ProjectDetailsClient';
import { projectBySlug, projects } from '@/app/data/projects';

export default function ProjectDetails({ params }) {
  const project = projectBySlug[params.slug] || {
    title: 'Project Not Found',
    description: 'No description available.',
    technologies: [],
    gallery: [],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header showNav={false} />
      <ProjectDetailsClient project={project} />
    </div>
  );
}

// For Next.js app directory routing
export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
