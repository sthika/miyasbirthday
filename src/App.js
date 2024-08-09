import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Countdown from './components/Countdown/Countdown';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className=''>
        <Home />
        <Skills />
        {/* <Qualification/> */}
        <Countdown/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
