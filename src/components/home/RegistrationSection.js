import React, { useState } from 'react'
import CustomInput from '../../utils/CustomInput'
import ImageUpload from '../../utils/ImageUpload'
import QRCodeComponent from '../../utils/QRCodeComponent';

const RegistrationSection = () => {
    const [image, setImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };
    const websiteUrl = "https://www.cdination.org/";

    return (
        <section className={'registrationContainer'}>
            <header>
                <h3 className={'textCenter boldText f28'}>Inspiration National Convention Registration</h3>
            </header>
            <form className={'formContainer'}>
                <div>
                    <CustomInput label={'Full Name'} />
                </div>
                <div>
                    <CustomInput label={'Phone Number'} />
                </div>
                <div>
                    <CustomInput label={'Email Address'} />
                </div>
                <div>
                    <ImageUpload
                        label="Upload Image"
                        customInputContainer="your-custom-input-container-class"
                        customLabel="your-custom-label-class"
                        inputStyle="your-custom-input-style"
                        image={image}
                        handleImageChange={handleImageChange}
                    />
                </div>
                <QRCodeComponent url={websiteUrl}/>
            </form>

        </section>
    )
}

export default RegistrationSection