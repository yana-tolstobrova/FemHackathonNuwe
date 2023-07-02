import React, { useEffect } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  useEffect(() => {
    const setRandomSeed = (id) => {
      const turbulence = document.getElementById(id).querySelector('feTurbulence');
      turbulence.setAttribute('seed', Math.random() * 1000);
    };

    for (let i = 1; i <= 2; i++) {
      setRandomSeed(`displacementFilter${i}`);
    }
  }, []);

  return (
    <div className="animated-background-container">
      <svg viewBox="0 0 1000 1000" className='waves'>
        <filter id="displacementFilter1">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.006"
            numOctaves="1"
            stitchTiles="noStitch"
            result="turbulence"
          />

          <feColorMatrix in="turbulence" type="hueRotate" values="0" result="animate">
            <animate attributeName="values" from="0" to="360" dur="3s" repeatCount="indefinite" />
          </feColorMatrix>

          <feColorMatrix
            in="animate"
            type="matrix"
            values="0 0 0 0 1
              0 0 0 0 1
              0 0 0 0 1
              .5 .5 .5 1 0"
            result="cloud"
          />

          <feFlood flood-color="#0077b6" result="color-flood" />

          <feComposite in="color-flood" in2="cloud" operator="in" result="OUTLINE"></feComposite>
        </filter>

        <filter id="displacementFilter2">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.006"
            numOctaves="1"
            seed="2"
            stitchTiles="noStitch"
            result="turbulence"
          />

          <feColorMatrix in="turbulence" type="hueRotate" values="0" result="animate">
            <animate attributeName="values" from="0" to="360" dur="5s" repeatCount="indefinite" />
          </feColorMatrix>

          <feColorMatrix
            in="animate"
            type="matrix"
            values="0 0 0 0 1
              0 0 0 0 1
              0 0 0 0 1
              .5 .5 .5 1 0"
            result="cloud"
          />

          <feFlood flood-color="#00b4d8" result="color-flood" />

          <feComposite in="color-flood" in2="cloud" operator="in" result="OUTLINE"></feComposite>
        </filter>

        <rect x="0" y="0" width="1000" height="1000" fill="#ade8f4" />

        <rect x="0" y="0" width="1000" height="1000" style={{ filter: 'url(#displacementFilter1)' }} />

        <rect x="0" y="0" width="1000" height="1000" style={{ filter: 'url(#displacementFilter2)' }} />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
