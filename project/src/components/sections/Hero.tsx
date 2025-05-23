import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-neutral-900 dark:text-white">
              <span className="block">Crafting Digital</span>
              <span className="text-primary-600 dark:text-primary-400">
                Experiences
              </span>
              <span className="block">That Matter</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Freelance developer specializing in creating beautiful, functional
              websites and applications that help businesses grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" onClick={scrollToContact}>
                Get in Touch
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="/images/sangram.jpg"
                  alt="Portrait of a professional developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                1+
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                50+
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                2+
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                Happy Clients
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                1
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">Awards</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
