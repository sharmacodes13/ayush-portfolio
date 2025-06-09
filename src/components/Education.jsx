import { motion } from 'framer-motion';
import ritLogo from '../assets/edu-logo/rit.png';
import omkLogo from '../assets/edu-logo/omk.png';
import smhsLogo from '../assets/edu-logo/smhs.png';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Electronics and Telecommunication Engineering',
      institution: 'Ramaiah Institute of Technology',
      year: '2021 - 2025',
      description: 'Currently pursuing my undergraduate degree with a focus on Electronics and Telecommunication.',
      logo: ritLogo
    },
    {
      degree: "Higher Secondary Education",
      institution: "St Michael's High School, Patna",
      year: "2018 - 2020",
      logo: smhsLogo
    }
  ];

  return (
    <section id="education" className="py-12 bg-primary scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-gray-300 mb-4">Education</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6 bg-tertiary p-6 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-1">{edu.degree}</h3>
                  <p className="text-text-secondary mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
                  <p className="text-text-secondary">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <footer className="text-center py-6 text-text-secondary">
        <p>Made with <span className="text-red-500">❤️</span> from Ayush Sharma</p>
      </footer>
    </section>
  );
};

export default Education; 