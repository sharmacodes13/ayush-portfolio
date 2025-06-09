// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi';
import quizApp from '../assets/quiz-app.png';
import qrGen from '../assets/qr-gen.png';

const Projects = () => {
  const projects = [
    {
      title: 'Quiz Master',
      description: 'An interactive quiz application built with React and JavaScript. Features multiple categories, timer, and score tracking.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      liveLink: 'https://quizmaster-beta.vercel.app/',
      githubLink: 'https://github.com/sharmacodes13/Quiz-app',
      image: quizApp
    },
    // Add more projects here
    {
      title: 'QR Code Generator',
      description: 'A simple QR code generator application built with React and JavaScript. Features a clean and intuitive interface for generating and downloading QR codes.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      liveLink: 'https://qrgen-ayush.vercel.app/',
      githubLink: 'https://github.com/sharmacodes13/QR-code-generator',
      image: qrGen
    }
  ];

  return (
    <section id="projects" className="py-12 bg-primary scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-tertiary rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover ${project.title === 'QR Code Generator' ? 'object-top' : 'object-center'}`}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary text-text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <HiOutlineExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-text-primary rounded-lg hover:bg-opacity-80 transition-colors"
                  >
                    <HiOutlineCode className="w-5 h-5" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
  