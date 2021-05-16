import styled from 'styled-components';
import { scrollReveal } from '../animation';
import home2 from '../img/home2.png';
import { clock, diaphragm, money, teamwork } from '../img/icon';
import { Description, Image, Section } from '../styles';
import useScroll from './useScroll';

const CARD_ITEMS = [
  { icon: clock, header: 'Efficient' },
  { icon: teamwork, header: 'Teamwork' },
  { icon: diaphragm, header: 'Diaphragm' },
  { icon: money, header: 'Affordable' },
];

const ServicesSection = () => {
  const [sectionRef, controls] = useScroll();

  return (
    <Services variants={scrollReveal} animate={controls} ref={sectionRef}>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          {CARD_ITEMS.map(({ icon, header }) => (
            <Card key={header}>
              <div className='icon'>
                <img src={icon} alt='icon' />
                <h3>{header}</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          ))}
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='' />
      </Image>
    </Services>
  );
};

// Styled components

const Services = styled(Section)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background-color: #fff;
      color: #000000;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
