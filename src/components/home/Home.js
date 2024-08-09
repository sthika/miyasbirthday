import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Miya from '../../assets/telegram-cloud-photo-size-5-6109497142570761879-y.jpg';

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='container home__container grid'>
        <div className='home__content grid'>
          <Social />
          <div className='home__img'></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
