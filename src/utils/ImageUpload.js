import React, { useState, useEffect } from 'react';

function ImageUpload(props) {
    const { label, customInputContainer, customLabel, inputStyle, handleImageChange } = props;
    const [preview, setPreview] = useState(null);

    const hiddenFileInput = React.useRef(null);

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const onFileChange = (event) => {
        const file = event.target.files[0];
        handleImageChange(event);
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
        } else {
            setPreview(null);
        }
    };

    useEffect(() => {
        // Clean up the URL.createObjectURL when the component unmounts or preview changes
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    return (
        <div className={`inputContainer ${customInputContainer}`} style={{ position: 'relative', cursor: 'pointer' }} onClick={handleClick}>
             <label className={`f16 semiBoldText flex alignCenter`} style={{ color: 'rgba(3, 32, 39, 1)', fontWeight: '400' }} >
                {label}
            </label>
            <div className={`input flexRow alignCenter justifyBetween ${inputStyle}`} style={{ padding: '0 16px', height: '48px' }}>
                <input 
                    type="file" 
                    id="image" 
                    name="image" 
                    accept="image/*" 
                    style={{ display: 'none' }} 
                    onChange={onFileChange} 
                    ref={hiddenFileInput} 
                />
                {preview ? (
                    <p className={'f12 boldText'}>{preview}</p>
                ) : (
                    <p className={'f10 boldText'} style={{ color: '#999CA0' }}>
                        Upload payment receipt for confirmation in jpg or png (size within 6mb).
                    </p>
                )}
                <label style={{ position: 'absolute', right: '16px' }}>
                    {/* You can add an icon here if needed */}
                </label>
            </div>
            {preview && <img src={preview} alt="Uploaded" style={{ marginTop: '10px', maxWidth: '100%' }} />}
        </div>
    );
}

export default ImageUpload;
