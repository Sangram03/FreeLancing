import React from 'react';
import Container from './Container';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${className}`}
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
};

export default Section;