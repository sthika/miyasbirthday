import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => {
    setToggleState(index);
    console.log(toggleState);
  };
  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification__icon'> </i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Codyfi</h3>
                <span className='qualification__subtitle'>
                  Project management
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2021
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>IT Academy</h3>
                <span className='qualification__subtitle'>
                  Frontend Development
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2023
                </div>
              </div>
            </div>
            {/* 
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>education</h3>
                <span className='qualification__subtitle'>University</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2021-present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>education</h3>
                <span className='qualification__subtitle'>University</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2021-present
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Project Manager</h3>
                <span className='qualification__subtitle'>Beeline Kyrgyzstan</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2021
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Product Manager </h3>
                <span className='qualification__subtitle'>Beeline Kyrgyzstan</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2022
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Strategic and financial consulting</h3>
                <span className='qualification__subtitle'>
                Freelance
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calender-alt'></i> 2023
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
