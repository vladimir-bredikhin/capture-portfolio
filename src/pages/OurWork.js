import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MovieState } from '../movieState';

const OurWork = () => {
  const [movies] = useState(MovieState);

  return (
    <Work>
      {movies.map(movie => (
        <Movie key={movie.title}>
          <h2>{movie.title}</h2>
          <div className='line'></div>
          <Link to={{ pathname: movie.url, state: { movie } }}>
            <img src={movie.mainImg} alt={movie.title} />
          </Link>
        </Movie>
      ))}
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
