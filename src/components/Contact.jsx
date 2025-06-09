// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <HiOutlineMail className="w-5 h-5" />
            Say Hello
          </motion.a>
          
          <div className="mt-12 flex justify-center space-x-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="/src/assets/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
  