import React from 'react'

import NavbarAdmin from '../../components/navbar/NavbarAdmin'

const AddCategory = () => {
    return (
        <>
            <NavbarAdmin />
            <div>
                <div className="container">
                    <div className="row">
                        <h2 className="text-light mt-5 mb-5 text-md-start text-center">Add Category</h2>
                        <input
                            type="text"
                            className="form-control bg-input mb-5 fw-bold text-white col-12"
                            id="formGroupExampleInput"
                            placeholder="Type Here"
                            required
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

export default AddCategory