import React from 'react'

const ActivitiesCard = (props) => {
    return (
        <section className={'activitiesCardContainer'} style={{ background: props.bg }}>
            <h3 className={'f52 boldText pb48'} style={{ color: props.color }}>{props.number}</h3>
            <p className={'f24 semiBoldText pb30'}>{props.title}</p>
            <p className={'f16 mediumText pb48'}>{props.content}</p>
            <button>Read Here</button>
        </section>
    )
}

export default ActivitiesCard