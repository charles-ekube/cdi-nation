import React, { useState } from 'react'
import CustomInput from '../../utils/CustomInput'
import ImageUpload from '../../utils/ImageUpload'
import QRCodeComponent from '../../utils/QRCodeComponent';
import { CitySelect, CountrySelect, StateSelect } from 'react-country-state-city';
import Button from '../../utils/CustomButton';
import emailjs from 'emailjs-com';

// "service_8jybiwi","template_tsz3psf"

const RegistrationSection = () => {
    // const [formData, setFormData] = useState({
    //     fullName: '',
    //     phoneNumber: '',
    //     email: '',
    //     country: '',
    //     state: '',
    //     receipt: null
    // });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setFormData({ ...formData, receipt: reader.result });
    //     };
    //     reader.readAsDataURL(file);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const { fullName, phoneNumber, email, country, state, receipt } = formData;

    //     const templateParams = {
    //         fullName,
    //         phoneNumber,
    //         email,
    //         country,
    //         state,
    //         receipt
    //     };

    //     emailjs.send('service_k6cnopk', 'template_tsz3psf', templateParams, 'fLx4tluxoYWZYgySY')
    //         .then((response) => {
    //             console.log('SUCCESS!', response.status, response.text);
    //             alert('Message sent successfully');
    //         }, (error) => {
    //             console.error('FAILED...', error);
    //             alert('Failed to send message');
    //         });
    // };

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [countryid, setCountryid] = useState('');
    const [stateid, setstateid] = useState('');
    const [image, setImage] = useState(null);

    // const handleImageChange = (file) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setImage(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    // };
    const handleImageChange = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            fullName,
            phoneNumber,
            email,
            country: countryid,
            state: stateid,
            receipt: image
        };

        emailjs.send('service_k6cnopk', 'template_tsz3psf', templateParams, 'fLx4tluxoYWZYgySY')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully');
            }, (error) => {
                console.error('FAILED...', error);
                alert('Failed to send message');
            });
    };


    return (
        <section className={'registrationContainer'}>
            <header>
                <h3 className={'textCenter boldText f28'}>Inspiration National Convention 2024 Registration</h3>
            </header>
            <form className={'formContainer'} onSubmit={handleSubmit}>
            <aside>
                <div>
                    <CustomInput label={'Full Name'} value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <CustomInput label={'Phone Number'} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div>
                    <CustomInput label={'Email Address'} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='inputContainer'>
                    <label className={`f16 semiBoldText flex alignCenter`} style={{ color: 'rgba(3, 32, 39, 1)', fontWeight: '400' }}>
                        Country
                    </label>
                    <CountrySelect
                        onChange={(e) => {
                            setCountryid(e.name);
                            // console.log(e)
                        }}
                        placeHolder="Select Country"
                        style={{ backgroundColor: 'rgba(249, 249, 251, 1)' }}
                        containerClassName={'input'}
                    />
                </div>
                <div className='inputContainer'>
                    <label className={`f16 semiBoldText flex alignCenter`} style={{ color: 'rgba(3, 32, 39, 1)', fontWeight: '400' }}>
                        State
                    </label>
                    <StateSelect
                        countryid={countryid}
                        onChange={(e) => {
                            setstateid(e.name);
                            // console.log(e)
                        }}
                        placeHolder="Select State"
                        style={{ backgroundColor: 'rgba(249, 249, 251, 1)' }}
                        containerClassName={'input'}
                    />
                </div>
                {/* <div>
                    <ImageUpload
                        label="Upload Receipt"
                        image={image}
                        handleImageChange={handleImageChange}
                    />
                </div> */}
                  <div>
                    <ImageUpload
                        label="Upload Receipt"
                        image={image}
                        handleImageChange={handleImageChange}
                    />
                </div>
                <div>
                    <Button text={'Submit'} />
                </div>
            </aside>
                <aside>
                    <article>

                        <h3>Welcome to INC 2024 Registration Portal</h3>
                        <p>
                            Thank you for your interest in attending the upcoming INC 2024. To ensure a smooth and organized registration process, we kindly ask you to follow the steps below:
                        </p>

                        <ol>
                            <li>
                                1. Fill Out the Registration Form: Please complete all the required fields in the registration form with your accurate information. This helps us prepare adequately for your participation.
                            </li>
                            <li>

                                2. Upload Your Payment Receipt: After making your payment, kindly upload a clear image or PDF of your payment receipt using the upload section provided in the form. This step is crucial for us to verify your registration and secure your spot.

                            </li>
                            <li>
                                3. Payment Details: Please make your payment to the following account number:

                                <br /> **Account Number**: 1234567890
                                <br /> **Bank Name**: XYZ Bank
                                <br />**Account Name**: [Church Program Account Name]
                            </li>
                        </ol>

                        <h3>Why is this Necessary?</h3>
                        <ul>
                            <li>
                                Accurate Records: Having your payment receipt ensures that we have accurate records of all participants, which helps in our planning and organization.
                            </li>
                            <li>
                                Smooth Entry: Confirming your payment beforehand allows for a smoother and quicker entry process on the day of the event.
                            </li>
                            <li>
                                Preparation: Knowing the number of attendees in advance helps us to make adequate preparations, ensuring everyone has a fulfilling and comfortable experience.
                            </li>
                        </ul>

                        <p>
                            We appreciate your cooperation and look forward to having you join us for this spiritually enriching event. If you have any questions or need assistance, please feel free to contact us at [church contact details].
                        </p>
                        <p>
                            God bless you!
                        </p>
                    </article>
                </aside>

                {/* <QRCodeComponent url={websiteUrl}/> */}
            </form>

        </section>
    )
}

export default RegistrationSection