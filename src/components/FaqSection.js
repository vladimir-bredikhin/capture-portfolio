import { AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Section } from '../styles';
import Question from './Question';

const QUESTIONS = [
  'How Do I Start?',
  'Daily Schedule?',
  'Different Payment Methods?',
  'What Products Do You Offer?',
];

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        {QUESTIONS.map(question => (
          <Question {...{ question }} key={question}>
            <motion.div
              className='answer'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.75, delay: 0.25 },
              }}
            >
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                tempora.
              </p>
            </motion.div>
          </Question>
        ))}
      </AnimateSharedLayout>
    </Faq>
  );
};

// Styled components
const Faq = styled(Section)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
  }

  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
