import React, { useState } from 'react'
import { LogoNew } from '../../assets/images/Index'
import CustomInput from '../../utils/CustomInput'
import Button from '../../utils/CustomButton'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // For redirection
    const disabled = () => {
        return email === '' || password === '' || loading;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin_cdi_verify'); // Redirect to the verify page upon successful login
        } catch (error) {
            toast.error('Login failed. Please check your email and password.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
        setLoading(false);
    };

    return (
        <main className={'verifyPageContainer'}>
            <div className={'verifyNav'}>
                <img src={LogoNew} alt='logo' />
                <div>
                    <h4 className={'boldText f30'}>INC 2024</h4>
                </div>
            </div>

            <div className={'loginFormContainer'}>
                <div>
                    <h2 className={'boldText f30 textCenter'}>Login</h2>
                </div>

                <div>
                    <CustomInput label={'Email Address'} value={email} onChange={(e) => setEmail(e.target.value)} type={'email'} />
                </div>
                <div>
                    <CustomInput label={'Password'} value={password} onChange={(e) => setPassword(e.target.value)} type={'password'} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '20px' }}>
                    <Button text={'Submit'} disabled={disabled()} onClick={handleLogin} />
                </div>
            </div>
        </main>

    )
}

export default AdminLogin