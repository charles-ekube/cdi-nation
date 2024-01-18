import React from 'react'
import '../../assets/styles/new.css'
import Button from '../../utils/CustomButton'

const Hero = () => {
  return (
    <>
    <div className='hero-box'>
        <h1>First Steps.</h1>
        <p>Getting started with the Bar Area Christain Church.</p>
        <Button text="Connect with Us" className={'hero-btn'}/>
    </div>
    </>
    
  )
}

export default Hero