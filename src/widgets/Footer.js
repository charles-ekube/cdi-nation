import React from 'react';
import { logoSVG } from '../assets/images/Index';
import '../assets/styles/widgetStyles.css';
import '../assets/styles/textStyles.css';
import '../assets/styles/generalStyles.css';
import { Facebook, Instagram, Twitter, Youtube } from '../assets/images/Index';


const Footer = () => {
    return (
        <>
            <section className={'footerContainer'}>
                <div className={'flexRow alignCenter'}>
                    <img src={logoSVG} alt={'logo'} style={{ marginRight: '10px' }} />
                    <p className={'f14 boldText'}>Chapel of Divine Inspiration Ministries</p>
                </div>
                <div className={'footerSocialLinksContainer flexRow alignCenter '}>
                    <span className={'f16 semiBoldText'}>Also follow us:</span>
                    <ul className={'flexRow alignCenter'}>
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href='https://twitter.com/CdiChurch'>
                                <img src={Twitter} alt={'twitter-icon'} />
                            </a>

                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.instagram.com/cdi_church'>
                                <img src={Instagram} alt={'instagram-icon'} />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href='https://m.facebook.com/thecdichurch/'>
                                <img src={Facebook} alt={'facebook-icon'} />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href='https://youtube.com/channel/UCuO2fHdhvniqyOMxyQXaoug'>
                                <img src={Youtube} alt={'youtube-icon'} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={'flexRow alignCenter justifyBetween copy'}>
                    <p className={'f14 semiBoldText'}>Privacy Policy</p>
                    <p className={'f14 semiBoldText'}>Terms and Conditions</p>
                </div>
            </section>
        </>

    )
}

export default Footer