import React, { useEffect, useState } from 'react';
import NavBar from '../../widgets/NavBar';
import { firestore, storage } from '../../firebase';
import { collection, query, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { LogoNew } from '../../assets/images/Index';
import Skeleton from 'react-loading-skeleton'
import { CloseCircle } from 'iconsax-react';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Verify = () => {
    const [registrations, setRegistrations] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const navigate = useNavigate()

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(true)
                const q = query(collection(firestore, 'registrations'));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const data = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setRegistrations(data);
                    console.log(data, 'data') 
                    setLoading(false)
                });

                return () => unsubscribe();
            } else {
                // Redirect to login page or show an error message
                toast.error('You need to be signed in to view this page.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                });
                navigate('/login')
            }
        })


    }, []);


    const generateUniqueNumber = () => {
        const min = 1;
        const max = 999; // Adjust the range as needed
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum.toString().padStart(3, '0'); // Ensure it's always 3 digits
    };
    


    const verifyRegistration = async (data) => {
        console.log('tes')
        setLoading(true)
  
        try {
            const uniqueNumber = generateUniqueNumber();
            const regRef = doc(firestore, 'registrations', data?.id);
            await updateDoc(regRef, { verified: true });
            setLoading(false)
            // Prepare email template parameters
            const templateParams = {
                email: data?.email,
                uniqueNumber: uniqueNumber,
                fullName: data?.fullName,
                state:data?.state
            };

            const emailBody = `
           
        `;

            emailjs.send('service_kl2eg4k', 'template_18yq9rs', {
                ...templateParams}, 'fLx4tluxoYWZYgySY')
                .then(async  (response) => {
                    if(response) {
                        await updateDoc(regRef, { verified: true });
                        toast.success('Registration verified! Email sent successfully.', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            theme: "light",
                        });
                    }
                    
                })
                .catch((error) => {
                    toast.error('Error sending email: Contact support.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                    });
                });

        } catch (error) {
            // console.error('Error verifying registration:', error);
            toast.error('Error verifying registration:Contact support.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",

            });
            setLoading(false)
            // console.log(error,'ERRO')
        }
    };

    const deleteRegistration = async (id, imageUrl) => {
        setLoading(true)

        try {
            // Delete image from Firebase Storage if exists
            if (imageUrl) {
                const imageRef = ref(storage, imageUrl);
                await deleteObject(imageRef);
            }

            // Delete document from Firestore
            const regRef = doc(firestore, 'registrations', id);
            await deleteDoc(regRef);
            // alert('Registration deleted!');
            toast.success('Registration deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",

            });
            setLoading(false)

        } catch (error) {
            // console.error('Error deleting registration:', error);
            toast.error('Error deleting registration:Contact support.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",

            });
            setLoading(false)

        }
    };

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    // Calculate totals
    const totalRegistered = registrations.length;
    const totalVerified = registrations.filter(reg => reg.verified).length;
    const totalUnverified = totalRegistered - totalVerified;

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRegistrations = registrations.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    const renderList = () => {
        if (loading) {
            return (
                <>
                    {[...Array(4)].map((_, index) => (
                        <Skeleton key={index} height={'300px'} width={'100%'} />
                    ))}
                </>
            );
        }

        if (registrations?.length === 0) {
            return (
                <>
                    <div>
                        <h3 className={'boldText f20 textCenter'}>No data available</h3>
                    </div>
                </>
            )
        }

        if (registrations?.length !== 0) {
            return registrations?.map((reg) => (
                
                <div key={reg.id} className={'verificationGridItem'}>
                    {reg.imageUrl && (
                        <img
                            src={reg?.imageUrl}
                            alt="Receipt"
                            style={{ width: '100px', cursor: 'pointer' }}
                        />
                    )}
                    <div>
                        <p className={'boldText f14'} style={{ fontWeight: '400' }}>Name: {reg?.fullName}</p>
                        <p className={'boldText f14'} style={{ fontWeight: '400' }}>Email: {reg?.email}</p>
                        <p className={'boldText f14'} style={{ fontWeight: '400' }}>State: {reg?.state}</p>
                        <p className={'boldText f14'} style={{ fontWeight: '400' }}>Phone Number: {reg?.phoneNumber}</p>
                        <p className={'boldText f14'} style={{ fontWeight: '400', color: reg?.verified ? 'rgba(2, 87, 84, 1)' : 'rgba(247, 56, 56, 1)' }}>Verified: {reg?.verified ? 'Verified' : 'Not verified'}</p>
                    </div>
                    <div className={'flexRow alignCenter'} style={{ gap: '16px', marginTop: '16px' }}>
                        <div>
                            <button onClick={() => verifyRegistration(reg)} style={{ backgroundColor: 'rgba(2, 87, 84, 1)' }} disabled={reg?.verified}>Verify</button>

                        </div>
                        <div>
                            <button onClick={() => deleteRegistration(reg.id, reg.imageUrl)} style={{ backgroundColor: 'rgba(247, 56, 56, 1)' }}>Delete</button>
                        </div>
                        <div>
                            <button onClick={() => handleImageClick(reg?.imageUrl)}>View Receipt</button>
                        </div>
                    </div>

                </div>
            ));
        }
    };

    return (
        <main className={'verifyPageContainer'}>
            <div className={'verifyNav'}>
                <img src={LogoNew} alt='logo' />
                <div>
                    <h4 className={'boldText f30'}>INC 2024</h4>
                </div>
            </div>
            <div>
                <h2 className={'boldText f30'} style={{ padding: '20px 0 0 0' }}>Dashboard</h2>
                <p className={'boldText'} style={{ fontWeight: '400', margin: '10px 0 40px 0', lineHeight: '20px' }}>NOTE: Click on the verify button when transaction has been verified in order to send INC Registration details to users*</p>
            </div>
            <ul className={'flexRow alignCenter flexWrap'} style={{ gap: '10px', marginBottom: '20px' }}>
                <li className={'miniCards'}>
                    Total Registered: {totalRegistered}
                </li>
                <li className={'miniCards'}>
                    Total Verified: {totalVerified}
                </li>
                <li className={'miniCards'}>
                    Total Unverified: {totalUnverified}
                </li>
            </ul>

            <div className={'verificationGrid'}>
                {renderList()}
            </div>


            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>
                            <CloseCircle size="32" color="#000" variant="Outline" />
                        </span>
                        <img src={selectedImage} alt="Full-size receipt" style={{ width: '100%' }} />
                    </div>
                </div>
            )}
            {/* Pagination Controls */}
            <div className="pagination">
                {Array.from({ length: Math.ceil(totalRegistered / itemsPerPage) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </main>
    );
};

export default Verify;
