import React from 'react';
import '../../assets/styles/homeStyles.css';
import '../../assets/styles/textStyles.css';

const WhatToExpectCard = (props) => {
    const { title, description } = props
    return (
        <div className={'whatToExpectCardContainer'}>
            <h6 className={'f18 semiBoldHeaderText textCenter '} style={{ color: '#000000', marginBottom: '16px', letterSpacing: ' 0.05em' }}>{title}</h6>
            <p className={'f16 regularHeaderText textCenter '} style={{ color: '#212121', letterSpacing: ' 0.02em' }}>{description}</p>
        </div>
    )
}

export default WhatToExpectCard