import React from 'react'
import { Pastor, Video } from '../../assets/images/Index'

const TeachingsCard = () => {
    return (
        <section className={'teachingsCardContainer'}>
            <div>
                <img src={Video} style={{ borderRadius: "15px 15px 0 0", width: '100%', objectFit: "cover" }} />
            </div>
            <div className={'flexRow'} style={{ padding: '16px', gap: '16px' }}>
                <img src={Pastor} style={{ height: '50px', width: '50px', objectFit: 'cover' }} />
                <div>
                    <p className={'semiBoldText f16 pb10'}>
                        PUSH 3| FOR THE SAKE OF PEOPLE
                    </p>
                    <p className={'semiBoldText f16 pb10'}>
                        WATCHING

                    </p>
                    <p className={'regularText f12 pb10'}>
                        Chapel of Divine Inspiration
                        Ministries
                    </p>
                    <p className={'regularText f12 '}>
                        5K views . 2 days ago
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TeachingsCard