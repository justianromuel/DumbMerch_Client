import React from 'react'
import { Link } from 'react-router-dom'

import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import DataCategory from '../../assets/fakeData/DataCategory'
import DeleteButton from '../../components/modal/DeleteButton'


const Category = () => {
    return (
        <>
            <NavbarAdmin />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="text-light mt-5 text-lg-start text-center">List Category</h3>
                        <div className='row justify-content-end col-12'>
                            <button className="btn btn-secondary mt-5 col-1"><Link to={"/add-category"} className="text-decoration-none text-white">Add</Link></button>
                        </div>
                        <table className="table table-dark table-striped mt-2">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DataCategory.map((Data, index) => (
                                    <tr>
                                        <td>{Data.id}</td>
                                        <td>{Data.categoryName}</td>
                                        <div>
                                            <Link to={`/edit-category/${index}`}>
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

export default Category