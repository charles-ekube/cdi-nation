import React from 'react';
const CustomInput = (props) => {

    const { label, type, name, value, onChange, placeholder, disabled, maxLength, customLabel, inputStyle, customInputContainer,
        multiple, height, icon, togglePassword, autoComplete } = props

    return (
        <>
            <div className={`inputContainer ${customInputContainer}`}>
                <label className={`f16 semiBoldText flex alignCenter ${customLabel}`} style={{color:'rgba(3, 32, 39, 1)', fontWeight:'400'}} >
                    {label}
                </label>
                <div className={`input flexRow alignCenter justifyBetween ${inputStyle}`}>
                    <input type={type} name={name} value={value} onChange={onChange}
                        placeholder={placeholder} className={'inputBox'}
                        disabled={disabled} maxLength={maxLength} multiple={multiple}
                        style={{ height: height, }} autoComplete={autoComplete}
                    />
                    {icon && icon}
                </div>


            </div>
        </>
    )
}

export default CustomInput