import React from 'react'
import Hero from '../../components/new/Hero'
import '../../assets/styles/new.css'
import Section from '../../components/new/Section'
import Button from '../../utils/CustomButton'
import Contact from '../../components/new/Contact'
import Quote from '../../components/new/Quote'
import NewEmpty from '../../components/new/NewEmpty'

const New = () => {
  return (
    <>
     <div className='hero'>
        <Hero />
     </div>
      <Section>
        <Button text={'View Locations'} className={'sec-btn'} />
      </Section>
      <Section>
        <Button text={'View Locations'} className={'sec-btn'} />
      </Section>
      <Section>
        <Button text={'View Locations'} className={'sec-btn'} />
      </Section>
      <Contact />
      <NewEmpty/>
      <Quote />
    </>
  )
}

export default New