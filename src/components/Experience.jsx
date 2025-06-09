// src/components/Experience.jsx
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Development Intern",
      company: "Vivaran Creators",
      duration: "July 2024 - September 2024",
      description: "Worked on developing and maintaining frontend applications using React.js and modern web technologies."
    },
    {
      title: "Research Intern",
      company: "Center for Imaging Technologies, Ramaiah Institute of Technology",
      duration: "March 2024 - May 2024",
      description: "Conducted research in developing a automotive radar based driver monitoring system."
    }
  ];

  return (
    <section id="experience" className="py-12 bg-primary scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-gray-300 mb-4">Experience</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6 bg-tertiary p-5 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-1">{exp.title}</h3>
              <p className="text-text-secondary mb-1">{exp.company}</p>
              <p className="text-text-secondary text-sm mb-2">{exp.duration}</p>
              <p className="text-text-secondary text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
  