import React from 'react';
import Container from '../ui/Container';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              Sangram.Dev
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md">
              Crafting digital experiences that blend creativity with functionality. 
              Let's bring your vision to life with precision and passion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <a href="#services" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400">
                Services
              </a>
              <a href="#projects" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400">
                Projects
              </a>
              <a href="#about" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400">
                About
              </a>
              <a href="#contact" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400">
                Contact
              </a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <p>sangramraju143@john.dev</p>
              <p>+91 7848842323</p>
              <p>Balasore, Odisha</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-12 pt-8 text-center text-neutral-600 dark:text-neutral-400">
          <p>&copy; {currentYear} Sangram.Dev. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;