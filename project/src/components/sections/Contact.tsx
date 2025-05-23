import React, { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const { name, email, subject, message } = formData;

      const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
      const whatsappUrl = `https://wa.me/917848842323?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <Section
      id="contact"
      title="Contact Me"
      subtitle="Let's discuss your project and bring your ideas to life."
      className="bg-white dark:bg-neutral-950"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
            Get in Touch
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4 text-primary-600 dark:text-primary-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">Email</h4>
                <a href="mailto:sangramraju143@gmail.com" className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  sangramraju143@gmail.com
                </a>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4 text-primary-600 dark:text-primary-400">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">Phone</h4>
                <a href="tel:+917848842323" className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  +91 7848842323
                </a>
              </div>
            </div>
            {/* WhatsApp */}
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4 text-primary-600 dark:text-primary-400">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">WhatsApp</h4>
                <a href="https://wa.me/917848842323" target="_blank" rel="noopener noreferrer" className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4 text-primary-600 dark:text-primary-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">Location</h4>
                <p className="text-neutral-700 dark:text-neutral-300">Balasore, Odisha</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 transition-colors ${
                    errors.name ? 'border-red-500 dark:border-red-500' : 'border-neutral-300 dark:border-neutral-700'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.name}</p>}
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 transition-colors ${
                    errors.email ? 'border-red-500 dark:border-red-500' : 'border-neutral-300 dark:border-neutral-700'
                  }`}
                  placeholder="Your email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.email}</p>}
              </div>
            </div>
            {/* Subject */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 transition-colors ${
                  errors.subject ? 'border-red-500 dark:border-red-500' : 'border-neutral-300 dark:border-neutral-700'
                }`}
                placeholder="Subject"
              />
              {errors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.subject}</p>}
            </div>
            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 transition-colors ${
                  errors.message ? 'border-red-500 dark:border-red-500' : 'border-neutral-300 dark:border-neutral-700'
                }`}
                placeholder="Your message"
              />
              {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.message}</p>}
            </div>
            {/* Button */}
            <Button variant="primary" className="w-full" type="submit">
              <span className="flex items-center justify-center">
                Send Message <Send size={18} className="ml-2" />
              </span>
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
