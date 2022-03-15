import React from 'react';
import Card from './Card';

export default function CardContainer() {
  return (<div id='card-container'
    className='w-full grid items-center h-screen relative overflow-hidden'
  >
    <Card />
  </div>);
};
