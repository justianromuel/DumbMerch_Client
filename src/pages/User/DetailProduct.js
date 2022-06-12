import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import NavbarUser from '../../components/navbar/NavbarUser'
import DataDummy from '../../assets/fakeData/DataDummy'

const DetailProduct = () => {
    const navigate = useNavigate();

    const handleNavigateToProfil = () => {
        navigate("/profile");
    }

    const params = useParams()
    const index = params.id
    return (
        <>
            <NavbarUser />
            <div className="">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <img
                            className="img-fluid"
                            src={DataDummy[index].photo}
                            alt="mouse"
                        />
                    </div>
                    <div class="col-4">
                        <h1 className='text-danger fw-bold'>{DataDummy[index].name}</h1>
                        <div>
                            <p>Stok : {DataDummy[index].qty}</p>
                            <ul>
                                <li>Spesifikasi 1</li>
                                <li>Spesifikasi 2</li>
                                <li>Spesifikasi 3</li>
                                <li>Spesifikasi 4</li>
                                <li>Spesifikasi 5</li>
                            </ul>
                            <p className='justify'>
                                {DataDummy[index].desc}
                            </p>
                            <div className='text-danger text-end my-3 fs-5 fw-bold'>Rp.{DataDummy[index].price},00</div>
                        </div>
                        <button onClick={handleNavigateToProfil} className='btn btn-danger col-12'>Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct