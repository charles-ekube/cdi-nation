import React from 'react'
import { LogoNew } from '../../assets/images/Index'
import Button from '../../utils/CustomButton'
import { useNavigate } from 'react-router-dom'

const Done = () => {
    const navigate = useNavigate()
    return (
        <div className={'donePage'}>
            <article>
                <img src={LogoNew} alt='logo' className='logo'/>

                <h3>🎉 Registration Successful! 🎉</h3>

                <p>Thank you for registering for the Inspiration National Convention (INC) 2024!</p>

                <p>
                    We are thrilled to have you join us from <b>August 21st to 25th</b> for this spiritually enriching and transformative event. Your registration has been successfully completed, and we can’t wait to welcome you!
                </p>

                <p style={{textAlign:'left', fontWeight:'700', fontSize:'18px'}}>Here’s what you can look forward to:</p>
                <ul>
                    <li>
                        - Inspirational Sessions: Engage in thought-provoking and spiritually uplifting sessions with Pastor KC Ahaiwe.
                    </li>
                    <li>
                        - Community & Fellowship: Connect with fellow attendees and strengthen your faith through shared experiences.
                    </li>
                    <li>
                        - Exciting Activities: Enjoy a variety of activities designed to inspire and rejuvenate your spirit.
                    </li>
                </ul>

                <p style={{textAlign:'left', fontWeight:'700',fontSize:'18px'}}>What’s next?</p>

                <ul>
                    <li>
                        - Event Details: Keep an eye on your email for important updates and detailed information about the program schedule.
                    </li>
                    <li>
                        - Prepare for the Event: Ensure you have all necessary documents and items ready for a smooth and enjoyable experience.
                    </li>
                </ul>


                <p>Need Assistance? Feel free to reach out to us at [cdiministries@gmail.com](mailto:cdiministries@gmail.com) or call us at +2347035687309 if you have any questions.</p>


                <p>We look forward to celebrating with you and making this event memorable together!</p>

                <p>God bless you and see you soon! 🙏</p>

                <div style={{margin:'30px 0'}}>
                        <Button text={'Done'} onClick={()=> navigate('/')} />
                    </div>

            </article>
        </div>
    )
}

export default Done