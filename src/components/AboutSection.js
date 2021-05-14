import { motion } from 'framer-motion';
import home1 from '../img/home1.png';
import { Description, Hide, Image, Section } from '../styles';

const AboutSection = () => {
  return (
    <Section>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography that you have. We have
          professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt='Camera Man' />
      </Image>
    </Section>
  );
};

export default AboutSection;
