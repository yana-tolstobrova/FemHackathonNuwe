import React, { useEffect, useState } from 'react';
import ChartUsersYearCountries from './Charts/ChartUsersYearCountry';
import './LineAnimation.css'
export default function ScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('line').offsetTop;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="line" className={`line ${isVisible ? 'line-appear' : ''}`} />
      <div className={`content ${isVisible ? 'content-appear' : ''}`}>
        <h2>How many Internet users each country could access the Internet?</h2>
        <ChartUsersYearCountries />
      </div>
    </div>
  );
}
