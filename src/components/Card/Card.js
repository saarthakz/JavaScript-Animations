import React, { useState, useRef, useEffect } from 'react';

export default function Card() {

  const cardRef = useRef(null);
  const [positions, setPositions] = useState({ top: 0, left: 0 });
  const [rotation, setRotation] = useState("0");

  function animateToLeft() {
    const keyFrames = [
      { transform: `translateX(${positions.left}%)`, offset: 0 },
      { transform: `translateX(${positions.left - 35}%)`, offset: 1 }
    ];
    const animation = cardRef.current.animate(keyFrames, 250);
    animation.addEventListener("finish", () => {
      cardRef.current.style.transform = `translateX(${positions.left - 35}%)`;
      setPositions((prevPositions) => ({ ...prevPositions, left: prevPositions.left - 35 }));
    });
  };

  function animateToRight() {
    const keyFrames = [
      { transform: `translateX(${positions.left}%)`, offset: 0 },
      { transform: `translateX(${positions.left + 35}%)`, offset: 1 }
    ];
    const animation = cardRef.current.animate(keyFrames, 250);
    animation.addEventListener("finish", () => {
      cardRef.current.style.transform = `translateX(${positions.left + 35}%)`;
      setPositions((prevPositions) => ({ ...prevPositions, left: prevPositions.left + 35 }));
    });
  };

  function handleRotate() {
    const keyFrames = [
      { rotate: "x 0deg", offset: 0 },
      { rotate: "x 180deg", offset: 0.5 },
      { rotate: "x 360deg", offset: 1 },
    ];
    const animation = cardRef.current.animate(keyFrames, 2500);
  }

  return (
    <div id='card'
      ref={cardRef}
      className='grid items-center m-auto w-96 h-96 rounded bg-red-300'
    >
      <span className='flex justify-around'>
        <button
          className='rounded p-8 text-xl bg-white'
          onClick={() => animateToLeft()}>Left</button>
        <button
          className='rounded p-8 text-xl bg-white'
          onClick={() => handleRotate()}>Rotate</button>
        <button className='rounded p-8 text-xl bg-white'
          onClick={() => animateToRight()}>Right</button>
      </span>
    </div>
  );
}
