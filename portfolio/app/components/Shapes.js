import React from 'react';

const Shapes = () => {
  return (
    <div id="shapes-mask" className="is-loaded">
     {/* Equilateral Triangle */}
     <svg xmlns="http://www.w3.org/2000/svg" width="60" height="64" viewBox="0 0 30 30">
        <symbol id="triangle">
          <path fill="none" stroke="#CF4981" strokeWidth="2" d="M15 3 L27 27 H3 Z"></path>
        </symbol>
      </svg>
      {/* Circle */}
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <symbol id="circle">
          <circle cx="15" cy="15" r="12" fill="none" stroke="#ff4d4d" strokeWidth="2" />
        </symbol>
      </svg>

      {/* Square */}
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <symbol id="square">
          <rect width="25" height="25" x="2.5" y="2.5" fill="none" stroke="#00ffcc" strokeWidth="2" />
        </symbol>
      </svg>

      {/* Use the shapes */}
      <svg width="30px" height="30px" className="layer1 p1" style={{ transform: 'translate(10px, 10px)' }}>
        <use xlinkHref="#triangle" className="yellow"></use>
      </svg>
      <svg width="30px" height="30px" className="layer1 p2" style={{ transform: 'translate(70px, 10px)' }}>
        <use xlinkHref="#circle" className="yellow"></use>
      </svg>
      <svg width="30px" height="30px" className="layer2 p3" style={{ transform: 'translate(130px, 10px)' }}>
        <use xlinkHref="#square" className="aqua"></use>
      </svg>
    </div>
  );
};

export default Shapes;
