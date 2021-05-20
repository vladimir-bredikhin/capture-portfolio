import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { page, title } from '../animation';

const ContactUs = () => {
  return (
    <ContactStyled
      variants={page}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={title}>Get in touch </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={title}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={title}>
            <Circle />
            <h2>Send an email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={title}>
            <Circle />
            <h2>Social media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #000000;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
