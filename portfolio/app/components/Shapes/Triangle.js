import React from 'react';

const Triangle = ({ color = "#FF5733", rotation = 0 }) => {
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
      <symbol id="triangle">
        {/* Equilateral triangle with points properly calculated */}
        <path
          fill="none"
          stroke={color}
          strokeWidth="3"
          d="M 15 5 L 25 25 L 5 25 Z"  // Corrected path for equilateral triangle
          filter="url(#shadow)"
        />
      </symbol>
      <use xlinkHref="#triangle" />
    </svg>
  );
};

export default Triangle;
