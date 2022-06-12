import React from 'react'

import NavbarAdmin from '../../components/navbar/NavbarAdmin'

const AddProduct = () => {
    return (
        <>
            <NavbarAdmin />
            <div>
                <div className="container">
                    <h3 className='my-5'>Add Product</h3>
                    <form>
                        <input type="file" className="form-control bg-transparent border-0 text-white" id="inputGroupFile" />
                        <div>
                            <label className="form-label"></label>
                            <input type="text" className="form-control bg-input text-white" placeholder="Product Name" required />
                        </div>
                        <div>
                            <label className="form-label"></label>
                            <textarea className="form-control bg-input text-white" placeholder="Description" required></textarea>
                        </div>
                        <div>
                            <label className="form-label"></label>
                            <input type="text" className="form-control bg-input text-white" placeholder="Price" required />
                        </div>
                        <div>
                            <label className="form-label"></label>
                            <input type="text" className="form-control bg-input text-white" placeholder="Qty" required />
                        </div>
                        <button className="btn btn-success col-12 mt-5" type="button">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProduct