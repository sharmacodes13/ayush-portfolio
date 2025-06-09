// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Ayush Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
