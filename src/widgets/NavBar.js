import React, { useState } from 'react'
import { logoSVG } from '../assets/images/Index';
import '../assets/styles/widgetStyles.css';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import '../assets/styles/textStyles.css';
import '../assets/styles/generalStyles.css';

const NavBar = () => {

    const [mobileNav, setMobileNav] = useState(false)
    const toggleMobileNav = () => {
        setMobileNav(previousState => !previousState);
    }

    return (
        <>
            <nav className={'navbar'}>
                <div className={'flexRow justifyBetween alignCenter'}>
                    <div>
                        <img src={logoSVG} alt='logo' />
                    </div>
                    <div className={'navLinksContainer'}>
                        <ul className={'navLinksListContainer'}>
                            <li className={'semiBoldText f16 textCenter'}>Home</li>
                            <li className={'semiBoldText f16 textCenter'}>About CDI</li>
                            <li className={'semiBoldText f16 textCenter'}>Testimonies</li>
                            <li className={'semiBoldText f16 textCenter'}>Workforce</li>
                            <li className={'semiBoldText f16 textCenter'}>Contact</li>
                        </ul>
                    </div>
                    <div className={'mobileNavBtnContainer'}>
                        <BiMenu size={'33px'} onClick={toggleMobileNav} />
                    </div>
                </div>
                {mobileNav &&
                    <aside className={'mobileNavContainer'}>
                        <div className={'closeBtnContainer'}>
                            <AiOutlineClose size={'26px'} onClick={toggleMobileNav} />
                        </div>
                        <ul className={'mobileNavList'}>
                            <li className={'boldText f16'}>About CDI</li>
                            <li className={'boldText f16'}>Testimonies</li>
                            <li className={'boldText f16'}>Workforce</li>
                            <li className={'boldText f16'}>Contact</li>
                        </ul>
                    </aside>}
            </nav>



        </>

    )
}

export default NavBar