// src/components/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 bg-primary scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-text-primary">About Me</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            I'm a Full Stack Developer passionate about creating impactful digital solutions. 
            With expertise in modern web technologies and cloud platforms, I build scalable 
            applications that solve real-world problems. I'm constantly learning and exploring 
            new technologies to stay at the forefront of software development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
