import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Working with John was an absolute pleasure. He took our vague concept and transformed it into a stunning website that perfectly represents our brand. His attention to detail and technical expertise are unmatched.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "Elevate Digital",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "John delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The site is not only beautiful but also performs exceptionally well, resulting in a 40% increase in conversions in the first month.",
    author: "Michael Chen",
    position: "Marketing Director",
    company: "Urban Outfitters",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "I've worked with many developers over the years, but John stands out for his creativity, technical skill, and professionalism. He truly cares about delivering work that makes an impact.",
    author: "Emma Rodriguez",
    position: "Product Manager",
    company: "TechStart Inc.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <Section
      id="testimonials"
      title="Testimonials"
      subtitle="What my clients are saying about working together."
      className="bg-white dark:bg-neutral-950"
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8 shadow-md relative">
                  <div className="absolute top-6 left-6 text-primary-400 opacity-20">
                    <Quote size={48} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-primary-600 dark:bg-primary-400' 
                  : 'bg-neutral-300 dark:bg-neutral-700'
              }`}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setCurrentIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white dark:bg-neutral-800 rounded-full shadow-md flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400"
          onClick={goToPrevious}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white dark:bg-neutral-800 rounded-full shadow-md flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400"
          onClick={goToNext}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </Section>
  );
};

export default Testimonials;