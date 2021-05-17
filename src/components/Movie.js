import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fade, line } from '../animation';
import useScroll from './useScroll';

const Movie = ({ movie }) => {
  const [ref, controls] = useScroll();

  return (
    <StyledMovie variants={fade} ref={ref} animate={controls}>
      <h2>{movie.title}</h2>
      <motion.div variants={line} className='line'></motion.div>
      <Link to={{ pathname: movie.url, state: { movie } }}>
        <Hide>
          <img src={movie.mainImg} alt={movie.title} />
        </Hide>
      </Link>
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Movie;
