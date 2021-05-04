import home1 from '../img/home1.png';
import { Description, Hide, Image, Section } from '../styles';

const AboutSection = () => {
  return (
    <Section>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
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
