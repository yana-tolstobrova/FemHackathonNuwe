import React, { useState, useEffect } from 'react';
import { useTrail, animated } from '@react-spring/web';
import './Intro.css';

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    y: open ? 0 : 20,
    from: { opacity: 0, x: 20, y: 20 },
    to: { opacity: open ? 1 : 0, x: open ? 0 : 20, y: open ? 0 : 20 },
  });

  return (
      <div className='h-screen'>
      {trail.map(({ opacity, x, y }, index) => (
        <animated.div
          key={index}
          className="trails-text"
          style={{
            opacity,
            transform: open ? `translate(0, 0)` : `translate(${x}px, ${y}px)`,
          }}
        >
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default function Charts() {
  const [open, setOpen] = useState(false);
  const [animateContainer, setAnimateContainer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) {
      const containerTimer = setTimeout(() => {
        setAnimateContainer(true);
      }, 1500);

      return () => clearTimeout(containerTimer);
    }
  }, [open]);

  return (
      <div className={`container${animateContainer ? ' animate' : ''}`}>
        <Trail open={open}>
        <span>Data</span>
        <span>Wave</span>
      </Trail>
          <p className="centered-text">Welcome! In this immersive web page you will find a visual exploration of the data that underpins our modern digital landscape. The growth of online users for every year since 1990 for 213 countries of the world! Are you ready to ride the DataWave? </p>

    </div>
    
  );
}
