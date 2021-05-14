import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { pageAnimation } from '../animation';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const movieState = location.state?.movie;

    if (movieState) {
      setMovie(movieState);
    } else {
      history.push('/work');
    }
  }, [location.state, history]);

  return (
    movie && (
      <Details
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <Headline>
          <h2>{movie.title}</h2>
          <img src={movie.mainImg} alt={movie.title} />
        </Headline>
        <Awards>
          {movie.awards.map(({ title, description }) => (
            <Award {...{ title, description }} key={title} />
          ))}
        </Awards>
        <ImageDisplay>
          <img src={movie.secondaryImg} alt={movie.title} />
        </ImageDisplay>
      </Details>
    )
  );
};

const Details = styled(motion.div)`
  color: #ffffff;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80%;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyled = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }

  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyled>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </AwardStyled>
  );
};

export default MovieDetails;
