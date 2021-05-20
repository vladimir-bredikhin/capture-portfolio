import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled(motion.section)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #ffffff;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  @media (max-width: 1300px) {
    padding: 0;

    button {
      margin: 2rem 0rem 5rem;
    }
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export { Section, Description, Image, Hide };
