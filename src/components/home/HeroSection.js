import React from 'react'

const HeroSection = () => {
    return (
        <section className={'heroSection'}>
            <div>
                <div>
                    <h2 className={'boldText'}>Welcome to The CDI Church</h2>
                    <p className={'semiBoldText'}>We are the inspiration people who are been raised by God to take over nations, cities, territories etc.</p>
                </div>
                <div className={'heroInputContainer'}>
                    <input placeholder='Enter your email address' />
                    <button>Get notified</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;