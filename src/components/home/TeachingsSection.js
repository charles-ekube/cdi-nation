import React from 'react'
import TeachingsCard from './TeachingsCard'
import { useMediaQuery } from 'react-responsive'

const TeachingsSection = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <section className={'discoveryContainer'} style={{ paddingTop: '0 ' }}>
            <div className={'textCenter'}>
                <h2 className={isTabletOrMobile ? 'boldText f28' : 'boldText f50'}>Watch life changing sermons and teachings from our Pastor</h2>
                <p className={'regularText f16'}>
                    And I will give you pastors according to mine heart, which shall feed you with knowledge
                    and understanding. Jeremiah 3:15
                </p>
            </div>
            <div >
                <TeachingsCard />
                <TeachingsCard />
                <TeachingsCard />
                <TeachingsCard />
                <TeachingsCard />
                <TeachingsCard />
            </div>
        </section>
    )
}

export default TeachingsSection