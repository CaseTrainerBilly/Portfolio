'use client'
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Hero.module.css';
import Triangle from './Shapes/Triangle';
import Circle from './Shapes/Circle';
import Square from './Shapes/Square';
import BouncingArrow from './BouncingArrow';
import PopupSection from './PopupSection'; // Import the PopupSection component

export default function Hero() {
  const animationRef = useRef();
  const [shapes, setShapes] = useState([]); // State to hold shapes
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const fixedShapes = [
      { component: <Circle color="#FF5733" rotation={45} />, x: '5%', y: '10%' },
      { component: <Circle color="#3498DB" rotation={45} />, x: '15%', y: '25%' },
      { component: <Square color="#28B463" rotation={45} />, x: '30%', y: '35%' },
      { component: <Triangle color="#FFC300" rotation={90} />, x: '50%', y: '15%' },
      { component: <Circle color="#3498DB" rotation={90} />, x: '40%', y: '60%' },
      { component: <Square color="#28B463" rotation={90} />, x: '70%', y: '50%' },
      { component: <Triangle color="#FFC300" rotation={135} />, x: '20%', y: '80%' },
      { component: <Circle color="#3498DB" rotation={135} />, x: '65%', y: '30%' },
      { component: <Square color="#E74C3C" rotation={135} />, x: '80%', y: '70%' },
      { component: <Triangle color="#3498DB" rotation={180} />, x: '10%', y: '90%' },
      { component: <Circle color="#3498DB" rotation={180} />, x: '25%', y: '40%' },
      { component: <Square color="#E74C3C" rotation={180} />, x: '55%', y: '20%' },
      { component: <Triangle color="#E74C3C" rotation={225} />, x: '45%', y: '10%' },
      { component: <Circle color="#F39C12" rotation={270} />, x: '75%', y: '15%' },
      { component: <Square color="#F39C12" rotation={270} />, x: '60%', y: '85%' },
      { component: <Triangle color="#F39C12" rotation={270} />, x: '35%', y: '55%' },
      { component: <Circle color="#F39C12" rotation={270} />, x: '90%', y: '25%' },
      { component: <Square color="#1ABC9C" rotation={315} />, x: '80%', y: '40%' },
      { component: <Triangle color="#1ABC9C" rotation={315} />, x: '74%', y: '21%' },
      { component: <Circle color="#1ABC9C" rotation={315} />, x: '89%', y: '45%' },
      { component: <Square color="#1ABC9C" rotation={315} />, x: '32%', y: '67%' },
      // Additional shapes
      { component: <Triangle color="#9B59B6" rotation={30} />, x: '12%', y: '15%' }, // New Triangle
      { component: <Circle color="#E67E22" rotation={60} />, x: '22%', y: '75%' }, // New Circle
      { component: <Square color="#2ECC71" rotation={150} />, x: '42%', y: '35%' }, // New Square
      { component: <Triangle color="#3498DB" rotation={210} />, x: '2%', y: '45%' }, // New Triangle
      { component: <Circle color="#F1C40F" rotation={300} />, x: '62%', y: '55%' }, // New Circle
      { component: <Square color="#E74C3C" rotation={120} />, x: '72%', y: '65%' }, // New Square
    ];
    
    const shapeElements = fixedShapes.map((shape, index) => {
      const translateX = (mousePosition.x / window.innerWidth) * 10; // 10% of mouse movement
      const translateY = (mousePosition.y / window.innerHeight) * 10; // 10% of mouse movement

      // Reverse direction for half of the shapes
      const isReversed = index % 2 === 0; // Change direction for even indexed shapes

      return (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            transform: `translate(${isReversed ? -translateX : translateX}px, ${isReversed ? -translateY : translateY}px)`,
          }}
        >
          {shape.component}
        </div>
      );
    });

    setShapes(shapeElements); // Set the fixed shapes to state
  }, [mousePosition, hasMounted]); // Run when mousePosition or hasMounted changes

  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24 ${styles.heroBackground} dark:bg-gray-900`}
    >
      <div id="shapes-mask" className="is-loaded">
        {hasMounted && shapes}
      </div>
      <div className={`relative z-10 mx-auto max-w-4xl px-6 text-center transition duration-300 ${isPopupOpen ? 'blur-sm' : ''}`}>
        <p className="mb-5 inline-flex rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-sm backdrop-blur dark:border-sky-800 dark:bg-slate-900/70 dark:text-sky-300">
          Software Engineer Portfolio
        </p>
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white sm:text-6xl md:text-7xl">Billy Richardson</h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-700 dark:text-gray-300 sm:text-2xl">
          Full-stack engineer building clean web experiences, automation workflows, and practical digital products.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button 
          onClick={() => setIsPopupOpen(true)}
          className="relative inline-block rounded-full bg-sky-600 px-8 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
        >
          <span className="relative">Open Profile</span>
        </button>
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white/80 px-8 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:border-sky-300 hover:text-sky-700 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-100 dark:hover:border-sky-700 dark:hover:text-sky-300"
          >
            View Projects
          </a>
        </div>
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <BouncingArrow />
      </div>
      <PopupSection isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
