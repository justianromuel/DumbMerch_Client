import React from 'react'
import { Link } from 'react-router-dom'

import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import DataDummy from '../../assets/fakeData/DataDummy'
import DeleteButton from '../../components/modal/DeleteButton'

const Product = () => {
    return (
        <>
            <NavbarAdmin />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="text-light mt-5 text-lg-start text-center">List Product</h3>
                        <div className='row justify-content-end'>
                            <button className="btn btn-secondary mt-5 col-1"><Link to={"/add-product"} className="text-decoration-none text-white">Add</Link></button>
                        </div>
                        <table className="table table-dark table-striped mt-2">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">No</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Product Desc</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DataDummy.map((Data, index) => (
                                    <tr className='text-center'>
                                        <td>{Data.id}</td>
                                        <td>{Data.photoType}</td>
                                        <td>{Data.name}</td>
                                        <td>{Data.desc.slice(0, 15)}...</td>
                                        <td>{Data.price}</td>
                                        <td>{Data.qty}</td>
                                        <div>
                                            <Link to={`/edit-product/${index}`}>
                                                <button className="btn btn-success col-3 me-3">Edit</button>
                                            </Link>
                                            <DeleteButton />
                                        </div>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product