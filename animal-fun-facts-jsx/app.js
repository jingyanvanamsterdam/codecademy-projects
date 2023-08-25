import { animals } from './animals';
import React from 'react';
import {createRoot} from 'react-dom/client';


const container = document.getElementById('app'); 
const root = createRoot(container); 

function displayFact(e) {
  let ani = e.target.alt;
  const i = Math.floor(Math.random()*3);
  const funFact = animals[ani].facts[i];
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
};

const background = (
  <img
    className='background'
    alt='ocean'
    src='/images/ocean.jpg'
    />
);

const images = []; 
for(const animal in animals){
  images.push(<img
  key={animal}
  className='animal'
  alt={animal}
  src={animals[animal].image}
  aria_label={animal}
  role='button'
  onClick={displayFact}
  />)
}
const title = "";

const showBackground = true; 

const animalFacts = (
  <div>
    <h1>{title===""? 'Click an animal for a fun fact':title}</h1>
    {showBackground===true && background}
    <div className='animals'>{images}</div>
    <p id='fact'></p>
  </div>
);



root.render(animalFacts)
