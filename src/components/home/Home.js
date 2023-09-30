import React from 'react'
import './home.css'
import Social from './Social'
import Data  from './Data'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <main className='main'>
    <section className="home" id="home">
        <div className="container home__container grid">
            <div className="home__content grid">
                <Social /> 
                <div className="home__img">

                </div>
                <Data />
            </div>
            <ScrollDown/>
        </div>
    </section>
    </main>
  )
}

export default Home