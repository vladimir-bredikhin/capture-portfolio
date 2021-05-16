import { motion } from 'framer-motion';
import { page } from '../animation';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';

const AboutUs = () => {
  return (
    <motion.div variants={page} initial='hidden' animate='show' exit='exit'>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
