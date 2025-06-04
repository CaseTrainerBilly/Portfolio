import React from 'react';

const Circle = ({ color = "#FF5733", rotation = 0 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
      <symbol id="circle">
        <circle
          cx="15"
          cy="15"
          r="12"
          fill="none"
          stroke={color}
          strokeWidth="3"
          filter="url(#shadow)"
        />
      </symbol>
      <use xlinkHref="#circle" />
    </svg>
  );
};

export default Circle;
