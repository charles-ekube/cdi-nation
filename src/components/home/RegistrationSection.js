import React, { forwardRef, useState } from 'react';
import CustomInput from '../../utils/CustomInput';
import ImageUpload from '../../utils/ImageUpload';
import { CountrySelect, StateSelect } from 'react-country-state-city';
import Button from '../../utils/CustomButton';
import { firestore, storage, auth } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import Loader from '../../utils/Loader';
import { useNavigate } from 'react-router-dom';

const RegistrationSection =({props, scroll}) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [countryid, setCountryid] = useState(0);
    const [stateid, setStateid] = useState(0);
    const [image, setImage] = useState(null);
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [loading, setLoading] = useState(false);

    // Authentication state
    const [authEmail, setAuthEmail] = useState('bobbywakili3@gmail.com');
    const [authPassword, setAuthPassword] = useState('CdinationInc2024');

    const handleImageChange = (file) => {
        setImage(file); // Update the state with the File object
    };
    const navigate = useNavigate()

    const disabled = () => {
        return fullName === '' || phoneNumber === '' || email === '' || countryid === 0 || stateid === 0 || country === '' || state === '' || loading;
    };

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, authEmail, authPassword);
            // alert('Signed in successfully!');
        } catch (error) {
            // console.error('Error signing in:', error);
            // alert('Failed to sign in. Please check your email and password.');
            toast.error('Error registering. Please try again. If issue persist contact support', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
        
                });
        }
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        setLoading(true);

        // Check if user is authenticated
        const user = auth.currentUser;
        if (!user) {
            await handleSignIn(); // Attempt to sign in if user is not authenticated
        }

        if (auth.currentUser) {
            try {
                const token = await auth.currentUser.getIdToken();
                // console.log('Authenticated user:', auth.currentUser, token);

                // Upload image to Firebase Storage
                let imageUrl = '';
                if (image && image instanceof File) {
                    console.log('Uploading file:', image);
                    const imageRef = ref(storage, `images/${Date.now()}_${image.name}`);
                    await uploadBytes(imageRef, image);
                    imageUrl = await getDownloadURL(imageRef);
                    console.log('Image URL:', imageUrl);
                } else {
                    console.error('No valid image file selected');
                }

                // Save form data to Firestore
                await addDoc(collection(firestore, 'registrations'), {
                    fullName,
                    phoneNumber,
                    email,
                    country,
                    state,
                    imageUrl,
                    verified: false,
                    userId: auth.currentUser.uid, // Store user ID
                });
                navigate('/done')

                // alert('Registration successful!');
                // toast.success('Registration successful! Email sent successfully.', {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     theme: "light",
            
                //     });
                // Reset form
                setFullName('');
                setPhoneNumber('');
                setEmail('');
                setCountryid(0);
                setStateid(0);
                setImage(null);
                setCountry('');
                setState('');

            } catch (error) {
                // console.error('Error uploading registration:', error);
                // alert('Error registering. Please try again.');
                toast.error('Error registering. Please try again. If issue persist contact support', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
            
                    });
            } finally {
                setLoading(false);
            }
        } else {
            // alert('User not authenticated after sign-in attempt.');
            setLoading(false);
            toast.error('Contact support.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
        
                });
        }
    };

    return (
        <section className={'registrationContainer'} ref={scroll}>
             {loading && <Loader />}
            <header>
                <h3 className={'textCenter boldText f28'}>Inspiration National Convention (INC) 2024 Registration</h3>
            </header>
            <form className={'formContainer'} onSubmit={handleSubmit}>
                <aside>
                    <div>
                        <CustomInput label={'Full Name'} value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div>
                        <CustomInput label={'Phone Number'} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type={'tel'}/>
                    </div>
                    <div>
                        <CustomInput label={'Email Address'} value={email} onChange={(e) => setEmail(e.target.value)} type={'email'}/>
                    </div>
                    <div className='inputContainer'>
                        <label className={`f16 semiBoldText flex alignCenter`} style={{ color: 'rgba(3, 32, 39, 1)', fontWeight: '400' }}>
                            Country
                        </label>
                        <CountrySelect
                            onChange={(e) => {
                                setCountryid(e.id);
                                setCountry(e.name);
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
                                setStateid(e.id);
                                setState(e.name);
                            }}
                            placeHolder="Select State"
                            style={{ backgroundColor: 'rgba(249, 249, 251, 1)' }}
                            containerClassName={'input'}
                        />
                    </div>
                    <div>
                        <ImageUpload
                            label="Upload Receipt"
                            image={image}
                            handleImageChange={handleImageChange}
                        />
                    </div>
                    <div>
                        <Button text={'Submit'} onClick={handleSubmit} disabled={disabled()} />
                    </div>
                </aside>
                <aside>
                    <article>
                        <h3>Welcome to INC 2024 Registration Portal</h3>
                        <p>Thank you for your interest in attending the upcoming INC 2024. To ensure a smooth and organized registration process, we kindly ask you to follow the steps below:</p>
                        <ol>
                            <li>Fill Out the Registration Form: Please complete all the required fields in the registration form with your accurate information. This helps us prepare adequately for your participation.</li>
                            <li>Upload Your Payment Receipt: After making your payment, kindly upload a clear image or PDF of your payment receipt using the upload section provided in the form. This step is crucial for us to verify your registration and secure your spot.</li>
                            <li style={{fontSize:'20px', lineHeight:'25px'}}>Payment Details: Please make your payment to the following account number:
                                <br/>
                                <br /> **Account Number**: 1003766187
                                <br/>
                                <br /> **Bank Name**: FCMB BANK
                                <br/>
                                <br /> **Account Name**: INSPIRATION MEDIA
                            </li>
                        </ol>
                        <h3>Why is this Necessary?</h3>
                        <ul>
                            <li>Accurate Records: Having your payment receipt ensures that we have accurate records of all participants, which helps in our planning and organization.</li>
                            <li>Smooth Entry: Confirming your payment beforehand allows for a smoother and quicker entry process on the day of the event.</li>
                            <li>Preparation: Knowing the number of attendees in advance helps us to make adequate preparations, ensuring everyone has a fulfilling and comfortable experience.</li>
                        </ul>
                        <p>We appreciate your cooperation and look forward to having you join us for this spiritually enriching event. If you have any questions or need assistance, please feel free to contact us.
                        <br/> send us a mail <br/> <span className={'boldText f20'}>@cdiministries@gmail.com</span> 
                        <br/> Or call us <br/> <span className={'boldText f20'}>+2347035687309</span>
                        </p>
                        <p>God bless you!</p>
                    </article>
                </aside>
            </form>
        </section>
    );
};

export default RegistrationSection;
