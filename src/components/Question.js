import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Question = ({ question, children }) => {
  const [isChildrenShown, setIsChildrenShown] = useState(false);

  return (
    <motion.div
      layout
      className='question'
      onClick={() => setIsChildrenShown(prev => !prev)}
    >
      <motion.h4 layout>{question}</motion.h4>
      {isChildrenShown && children}
      <div className='faq-line'></div>
    </motion.div>
  );
};

export default Question;
