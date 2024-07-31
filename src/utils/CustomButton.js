import React from 'react';
import Text from './CustomText';

const Button = ({ text, onClick, className, loading, ...otherProps }) => {
    const combinedClassName = `semiBoldText f16 custom-btn ${className}`.trim(); // Combine the general className and the passed className

    return (
        <button className={combinedClassName} onClick={onClick} {...otherProps}>
            {loading ? (<span className={'loader'}></span>) : <Text>{text}</Text>}
        </button>
    );
};

export default Button;