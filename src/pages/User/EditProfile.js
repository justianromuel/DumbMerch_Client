import React from 'react'

import NavbarUser from '../../components/navbar/NavbarUser'
import DataUser from '../../assets/fakeData/DataUser';

const EditProfile = () => {
    return (
        <>
            <NavbarUser />
            <div>
                <div className="container">
                    <h3 className='my-5'>Edit Profile</h3>
                    <form>
                        <input type="file" className="form-control bg-transparent border-0 text-white" id="inputGroupFile" />
                        <div>
                            <label className="form-label"></label>
                            <input type="text" className="form-control bg-input text-white" placeholder="Name" value={DataUser[0].name} />
                        </div>
                        <div>
                            <label className="form-label"></label>
                            <input type="number" className="form-control bg-input text-white" placeholder="Phone" value={DataUser[0].phone} />
                        </div>
                        <div>
                            <label className="form-label"></label>
                            <input type="text" className="form-control bg-input text-white" placeholder="Gender" value={DataUser[0].gender} />
                        </div>
                        <div>
                            <label className="form-label"></label>
                            <textarea className="form-control bg-input text-white" placeholder="Address" value={DataUser[0].address}></textarea>
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

export default EditProfile