import React from 'react'
import ActivitiesCard from './ActivitiesCard'
import { useMediaQuery } from 'react-responsive'

const ActivitiesSection = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <section className={'discoveryContainer'} style={{ paddingTop: '0 ' }}>
            <div className={'textCenter'}>
                <h2 className={isTabletOrMobile ? 'boldText f28' : 'boldText f50'}>Also have access to other activities</h2>
                <p className={'regularText f16'}>
                    And I will give you pastors according to mine heart, which shall feed you with knowledge
                    and understanding. Jeremiah 3:15
                </p>
            </div>
            <div >
                <ActivitiesCard number={'1'} title={'Daily Devotional'} content={`Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.`} color={'#FC753B'} bg={'#F9EDE9'} />
                <ActivitiesCard number={'2'} title={'Weekly Confessions'} content={`Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.`} color={'#8FD4B8'} bg={'#EFF5F5'} />
                <ActivitiesCard number={'3'} title={'Testimonies'} content={`Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.`} color={'#FDDA5F'} bg={' #F9F6ED'} />
                <ActivitiesCard number={'4'} title={'Pastors Appointment Book'} content={`Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.`} color={'#FC753B'} bg={'#E9ECF9'} />
                <ActivitiesCard number={'5'} title={'Partnership'} content={`Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.`} color={'#8FD4B8'} bg={'#F5EFEF'} />
                <ActivitiesCard number={'6'} title={'Citizenship  School'} content={`Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting.`} color={'#FDDA5F'} bg={'#F9EDF6'} />

            </div>

        </section>
    )
}

export default ActivitiesSection