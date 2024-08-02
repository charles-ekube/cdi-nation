import React from 'react';
import TypingEffect from '../../utils/TypingEffect';
import { Pastor1, Pastor3 } from '../../assets/images/Index';

const HeroSection = () => {


  return (
    <section className={'heroSection'}>
      <div className={'glass-card'}>
        <div>
          <div className={'scroll'}>
            <marquee>
              <div>
                <h2>INC 2024</h2>
                <h2>INC 2024</h2>
                <h2>INC 2024</h2>
                <h2>INC 2024</h2>
                <h2>INC 2024</h2>
                <h2>INC 2024</h2>
                <h2>INC 2024</h2>
                <h2>INC 2024</h2>
                <h2>INC 2024</h2>
                <h2>INC 2024</h2>
                <h2>INC 2024</h2>
              </div>
            </marquee>
          </div>

<div className='glassText'>
<h4 >Inspiration National Convention</h4>
          <h5>The Biggest Gathering of The Inspiration People</h5>
          <h3>Theme: Ancient Landmark:Succeeding The Right Way In Modern Times.</h3>
</div>
         
        </div>
        <div>
          <img src={Pastor3} alt='pastor' />
        </div>
      </div>

    </section>
  )
}

export default HeroSection;

