import React, { useState } from 'react'
import { LogoNew, logoSVG } from '../assets/images/Index';
import '../assets/styles/widgetStyles.css';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import '../assets/styles/textStyles.css';
import '../assets/styles/generalStyles.css';
import { Link } from "react-router-dom"
import Button from '../utils/CustomButton';

const NavBar = () => {

    const [mobileNav, setMobileNav] = useState(false)
    const toggleMobileNav = () => {
        setMobileNav(previousState => !previousState);
    }

    return (
        <>
            <nav className={'flexRow alignCenter justifyBetween navbar'}>
                <section>
                    <img src={LogoNew} alt='logo'/>
                </section>
                <section>
                    <p>INC 2024</p>
                </section>
                <section>
                    <Button text={'Register'}/>
                </section>
            </nav>



        </>

    )
}

export default NavBar