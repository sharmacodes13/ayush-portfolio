// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import profilePic from '../assets/resume/profile-pic.jpeg';

const Hero = () => {
  const handleDownload = () => {
    const resumeUrl = 'https://drive.google.com/drive/folders/1Ayr3kMKKW1080OmUDBwnkDvvsw95m1ix?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-10 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white">
              Hi, I'm Ayush Sharma
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-300 mb-8">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <HiDownload className="w-5 h-5" />
              Resume
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-center"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 ml-8">
              <img
                src={profilePic}
                alt="Ayush Sharma"
                className="rounded-full object-cover object-[center_10%] shadow-2xl w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
