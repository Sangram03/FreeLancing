import React from 'react';
import Section from '../ui/Section';
import { Calendar, Clock, Briefcase, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="My journey, experience, and approach to creating digital solutions."
      className="bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl transform -rotate-3"></div>
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/4049876/pexels-photo-4049876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Developer working at desk" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
            Hi, I'm Sangram Das
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6">
            I'm a passionate full-stack developer with over 1 years of experience 
            creating digital solutions for businesses of all sizes. My journey in 
            software development began at a young age when I built my first website, 
            and I've been hooked ever since.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6">
            I specialize in creating clean, functional, and user-friendly websites 
            and applications that not only look beautiful but also solve real problems 
            for businesses and their customers. My approach combines technical expertise 
            with creative thinking to deliver solutions that exceed expectations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-primary-600 dark:text-primary-400">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                  Experience
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  1+ years in web development
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-primary-600 dark:text-primary-400">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                  Availability
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Part-time freelancer
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-primary-600 dark:text-primary-400">
                <Briefcase size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                  Projects
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  50+ completed successfully
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-primary-600 dark:text-primary-400">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                  Recognition
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  1  awards
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-50">
              My Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'UI/UX Design', 'Responsive Design', 'SEO', 'WordPress'].map((skill) => (
                <span 
                  key={skill} 
                  className="bg-white dark:bg-neutral-800 px-3 py-1 rounded-full text-sm text-neutral-700 dark:text-neutral-300 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;