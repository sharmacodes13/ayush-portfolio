import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiDocker, SiGit, SiTailwindcss, SiCplusplus } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="w-8 h-8 text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-green-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-blue-600" /> },
  { name: "Python", icon: <FaPython className="w-8 h-8 text-blue-700" /> },
  { name: "C++", icon: <SiCplusplus className="w-8 h-8 text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-blue-400" /> },
  { name: "AWS", icon: <FaAws className="w-8 h-8 text-orange-500" /> },
  { name: "Docker", icon: <SiDocker className="w-8 h-8 text-blue-500" /> },
  { name: "Git", icon: <SiGit className="w-8 h-8 text-orange-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-cyan-500" /> },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-12 bg-primary scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">Tech Stack</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-4 bg-tertiary rounded-full hover:shadow-lg transition-shadow"
            >
              {tech.icon}
              <span className="mt-2 text-text-primary font-medium text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 