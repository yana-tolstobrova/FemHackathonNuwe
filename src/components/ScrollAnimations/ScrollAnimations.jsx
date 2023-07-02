import './ScrollAnimations.css';
import { useState, useEffect } from 'react';
import Intro from '../Intro/Intro'
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground'
import Map from '../MapGeo'
import ChartUsersYear from '../ChartUsersYear'
import ChartUsersYearCountry from '../ChartUsersYearCountry'
import ChartTopTen from '../ChartTopTen'

const ScrollAnimations = () => {
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationActive(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="scroll-container">
        <ul className="scroll-list">
                  <li className={`hero ${animationActive ? 'slide-out-left' : ''}`}>
                      <Intro />
                      <AnimatedBackground />
          </li>
                  <li className={`charts ${animationActive ? 'slide-out-left' : ''}`}>
                    <div className='facts'>As of 2021, more than 60% of the world's population has access to the Internet. This represents a significant increase from just over 20% in 2005. </div>
                    <div className='components'><Map /></div>
          </li>
                  <li className={`charts ${animationActive ? 'slide-out-left' : ''}`}>
                      <ChartUsersYear />
            <div className='facts'>The precursor to the Internet, known as ARPANET, was developed in the late 1960s by the U.S. Department of Defense's Advanced Research Projects Agency (ARPA). It laid the foundation for the modern Internet.</div>
          </li>
                <li className={`charts ${animationActive ? 'slide-out-left' : ''}`}>
                      <div className='facts'>The Internet was initially used for military, educational, and research purposes. However, in the 1990s Internet Service Providers began offering access to individuals and businesses. </div>
                      <ChartUsersYearCountry />
          </li>
                  <li className={`charts ${animationActive ? 'slide-out-left' : ''}`}>
                      <ChartTopTen />
                <div className='facts'>In 2020, it was reported that only about 2% of the population in Eritrea had access to the Internet.</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ScrollAnimations;
