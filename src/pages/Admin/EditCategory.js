import React from 'react'
import { useParams } from 'react-router-dom'

import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import DataCategory from '../../assets/fakeData/DataCategory'

const EditCategory = () => {
    const params = useParams()
    const index = params.id

    return (
        <>
            <NavbarAdmin />
            <div>
                <div className="container">
                    <div className="row">
                        <h2 className="text-light mt-5 mb-5 text-md-start text-center">Edit Category</h2>
                        <div className="col"></div>
                        <input
                            type="text"
                            className="bg-input mb-5 fw-bold form-control text-white"
                            id="formGroupExampleInput"
                            placeholder="Type Here"
                            value={DataCategory[index].categoryName}
                        />
                        <button className="btn btn-success col-12" type="button">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCategory