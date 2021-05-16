import { motion } from 'framer-motion';
import React from 'react';
import { page } from '../animation';

const ContactUs = () => {
  return (
    <motion.div
      variants={page}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;
