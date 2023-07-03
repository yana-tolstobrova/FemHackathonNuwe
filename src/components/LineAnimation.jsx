import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import ChartUsersYearCountries from './Charts/ChartUsersYearCountry';
import './LineAnimation.css';

export default function ScrollAnimation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the rootMargin as per your requirements
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`content`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <h2 className="light-text">How many Internet users each country could access the Internet?</h2>
      <ChartUsersYearCountries />
    </motion.div>
  );
}
