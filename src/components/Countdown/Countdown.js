import React, { useState, useEffect } from 'react';
import './countdown.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('October 12, 2024 00:00:00');
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className='section countdown'>
      <h2 className='countdown__title'>До асянди осталось:</h2>

      {timeLeft.days !== undefined ? (
        //   <span>
        //     {timeLeft.days} дней, {timeLeft.hours} часов, {timeLeft.minutes} минут, {timeLeft.seconds} секунд
        //   </span>
        <div className='timer'>
          <div className='days'>
            <p>{timeLeft.days}</p>
            <p>дней</p>
          </div>
          <div className='days'>
            <p>{timeLeft.hours}</p>
            <p>часов</p>
          </div>
          <div className='days'>
            <p>{timeLeft.minutes}</p>
            <p>минут</p>
          </div>
          <div className='days'>
            <p>{timeLeft.seconds}</p>
            <p>секунд</p>
          </div>
        </div>
      ) : (
        <span>Событие уже наступило!</span>
      )}
    </section>
  );
};

export default Countdown;
