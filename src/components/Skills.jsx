// src/components/Skills.jsx
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      name: 'React',
      icon: '/src/assets/tech-stack logo/react.svg',
    },
    {
      name: 'JavaScript',
      icon: '/src/assets/tech-stack logo/javascript.svg',
    },
    {
      name: 'TypeScript',
      icon: '/src/assets/tech-stack logo/typescript.svg',
    },
    {
      name: 'Node.js',
      icon: '/src/assets/tech-stack logo/nodejs.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: '/src/assets/tech-stack logo/tailwind.svg',
    },
    // Add more skills here
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1
              }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 hover:shadow-xl transition-shadow">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
  