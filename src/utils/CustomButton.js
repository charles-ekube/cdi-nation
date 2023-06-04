import React from 'react';
import '../assets/styles/utils.css';
import '../assets/styles/textStyles.css';
import '../assets/styles/generalStyles.css';

const CustomButton = (props) => {
    return (
        <button type={props.type} onClick={props.onClick} disabled={props.disabled} name={props.name} className={`button f16 semiBoldText ${props.customStyle}`}
            style={{ backgroundColor: props.disabled ? '#FFC06D' : '#6A1B9A' }}
        >
            {!props.loading ? props.title : ''}
            {props.img && <img src={props.img} alt={'icon'} />}
            {props.loading && <span className={'loader'}></span>}
        </button>
    )
}

export default CustomButton