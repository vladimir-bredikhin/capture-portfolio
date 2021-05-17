import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { page, slider, sliderContainer } from '../animation';
import Movie from '../components/Movie';
import { MovieState } from '../movieState';

const OurWork = () => {
  const [movies] = useState(MovieState);

  return (
    <Work
      variants={page}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      {movies.map(movie => (
        // TODO fix athlete animation before rainbow slider
        <Movie {...{ movie }} key={movie.title} />
      ))}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
