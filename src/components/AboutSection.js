import { motion } from 'framer-motion';
import home1 from '../img/home1.png';
import { Description, Hide, Image, Section } from '../styles';
import { title, fade, photo } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <Section>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={title}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={title}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={title}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography that you have. We have
          professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photo} src={home1} alt='Camera Man' />
      </Image>
      <Wave />
    </Section>
  );
};

export default AboutSection;
