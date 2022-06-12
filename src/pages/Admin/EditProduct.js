import React from 'react'
import { useParams } from 'react-router-dom';

import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import DataDummy from '../../assets/fakeData/DataDummy';

const EditProduct = () => {
    const params = useParams()
    const index = params.id

    return (
        <>
            <NavbarAdmin />
            <div>
                <div className="container">
                    <h3 className='my-5'>Edit Product</h3>
                    <form>
                        <input type="file" className="form-control bg-transparent border-0 text-white" id="inputGroupFile" />
                        <div>
                            <label className="form-label"></label>
                            <input type="text" className="form-control bg-input text-white" placeholder="Product Name" value={DataDummy[index].name} />
                        </div>
                        <div>
                            <label className="form-label"></label>
                            <textarea className="form-control bg-input text-white" placeholder="Description" value={DataDummy[index].desc}></textarea>
                        </div>
                        <div>
                            <label className="form-label"></label>
                            <input type="text" className="form-control bg-input text-white" placeholder="Price" value={DataDummy[index].price} />
                        </div>
                        <div>
                            <label className="form-label"></label>
                            <input type="text" className="form-control bg-input text-white" placeholder="Qty" value={DataDummy[index].qty} />
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

export default EditProduct