import React, { useState } from 'react';
import Section from '../ui/Section';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'E-commerce Food Ordering Platform',
    description: 'A fully responsive e-commerce platform with cart functionality and payment integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    link: 'https://shopping-frontend-ug9j.onrender.com/'
  },
  {
    title: 'College Techfest Website',
    description: 'Interactive dashboard with data visualization for financial analysis and reporting.',
    image: 'https://images.unsplash.com/photo-1642054220431-649c53b0d3de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'web',
    link: 'https://saksham-2025.vercel.app/'
  },

];

const categories = ['all', 'web', 'app', 'design'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of my recent work across various industries and technologies."
      className="bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm font-medium rounded-md capitalize transition-colors ${
                activeCategory === category
                  ? 'bg-white dark:bg-neutral-700 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <a 
                    href={project.link} 
                    className="flex items-center justify-center bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full mb-3 capitalize">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-50">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;