import React from 'react';
import { LogoNew } from '../assets/images/Index';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <img src={LogoNew} alt="Loading..." className="loader-image" />
            </div>
        </div>
    );
};

export default Loader;
