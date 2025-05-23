import React from 'react';
import Section from '../ui/Section';
import { Code, Palette, BarChart, Globe } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code size={32} className="text-primary-600 dark:text-primary-400" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices for performance and accessibility.'
  },
  {
    icon: <Palette size={32} className="text-primary-600 dark:text-primary-400" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create meaningful and relevant experiences for your customers.'
  },
  {
    icon: <BarChart size={32} className="text-primary-600 dark:text-primary-400" />,
    title: 'SEO Optimization',
    description: 'Improve your online visibility and reach more customers with data-driven SEO strategies.'
  },
  {
    icon: <Globe size={32} className="text-primary-600 dark:text-primary-400" />,
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platforms with secure payment processing and inventory management.'
  },
];

const Services: React.FC = () => {
  return (
    <Section
      id="services"
      title="Services"
      subtitle="Specialized solutions to help your business grow and succeed in the digital landscape."
      className="bg-white dark:bg-neutral-950"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-white dark:bg-neutral-800 w-16 h-16 rounded-lg flex items-center justify-center mb-5 shadow-sm">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-50">
              {service.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;