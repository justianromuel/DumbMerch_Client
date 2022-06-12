import React from 'react'
import { Link } from 'react-router-dom';

import NavbarUser from '../../components/navbar/NavbarUser'
import DataUser from '../../assets/fakeData/DataUser';
import ProfilImage from '../../assets/images/ImageProfile.png'
import Logo from '../../assets/images/LogoDumbmerch.png'

const Profile = () => {
    return (
        <>
            <NavbarUser />
            <div className="Container">
                <div className="row justify-content-center pt-5">

                    <div className="col-6 text-light ml-5">
                        <h1 className="fw-bold text-danger">My Profile</h1>
                        <div class="d-flex">
                            <div class="p-2">
                                <img className="profil-image" src={ProfilImage} alt="profil-image" />
                            </div>
                            <div class="p-2">
                                <h5 className='fw-bold text-danger'>Name</h5>
                                <p className='fs-6'>{DataUser[0].name}</p>

                                <h5 className='fw-bold text-danger'>Email</h5>
                                <p className='fs-6'>{DataUser[0].email}</p>

                                <h5 className='fw-bold text-danger'>Phone</h5>
                                <p className='fs-6'>{DataUser[0].phone}</p>

                                <h5 className='fw-bold text-danger'>Gender</h5>
                                <p className='fs-6'>{DataUser[0].gender}</p>

                                <h5 className='fw-bold text-danger'>Address</h5>
                                <p className='fs-6'>{DataUser[0].address}</p>

                                <Link to={'/edit-profile'}>
                                    <button className="btn btn-danger col-12 fs-6 fw-bold">
                                        Edit Profile
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 text-light ">
                        <h1 className="fw-bold text-danger">Transaction</h1>
                        <div className='transaction'>
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        <img
                                            className='col-2'
                                            style={{ height: '80px', width: '120px' }}
                                            src="http://static.bmdstatic.com/pk/product/large/5af92f60623e6.jpg"
                                            alt="img-transaction"
                                        />
                                        <div className="col-6">
                                            <h6 className='mb-0 fw-bold text-danger'>Mouse Logitech</h6>
                                            <h6 className='mb-0 text-danger'>Saturday, <span className='fw-lighter'>14 Juli 2021</span></h6>
                                            <h6 className='mb-4 fw-lighter'>Price : Rp.1.100.000,00</h6>
                                            <h6 className='mb-0'>Sub total : Rp.1.100.000,00</h6>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-end">
                                            <img
                                                style={{ height: '70px', width: '70px' }}
                                                src={Logo}
                                                alt="logo-transaction"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile