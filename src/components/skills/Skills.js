import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      {/* <h2 className="section__title">12 октября 2024 года</h2> */}
      {/* <span className="section__subtitle">Приглашаем Вас на первый праздник нашей дочери!</span> */}

      <p className='section__subtitle'>
        Годик будет нашей зайке!
        <br />
        Приглашаем вас прийти,
        <br />
        Разделить большую радость,
        <br />
        Время классно провести.
        <br />
        <br />
        Веселиться будем долго —<br />
        Петь, играть и танцевать.
        <br />
        Наше солнышко родное
        <br />
        Бурно будем поздравлять.
        <br />
      </p>
    </section>
  );
};

export default Skills;
