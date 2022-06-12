import React from 'react'

import NavbarUser from '../../components/navbar/NavbarUser'
import Admin from "../../assets/images/Admin.png";

const ComplainUser = () => {
    return (
        <>
            <NavbarUser />
            <div className="container mt-5 text-white">
                <div className="row">
                    <div className="d-flex col-4">
                        <div>
                            <div className="d-flex">
                                <img
                                    className="me-3 rounded-circle"
                                    src={Admin}
                                    alt="admin"
                                    height={"50px"}
                                />
                                <div>
                                    <p className="mb-2">Admin</p>
                                    <p>Yes, Is there anything I can help</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="d-flex ms-auto"
                            style={{ height: "600px" }}
                        >
                            <div className="vr"></div>
                        </div>
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-end">
                        <div className="d-flex ms-3 justify-content-end">
                            <div className="d-flex">
                                <p
                                    className="bg-dark p-3 rounded-pill">
                                    Hello Admin, I Need Your Help
                                </p>
                            </div>
                        </div>
                        <div className="d-flex ms-3">
                            <img className="me-3 rounded-circle" src={Admin} alt="admin" height={"50px"} />
                            <div className="d-flex">
                                <p className="bg-dark p-3 rounded-pill">
                                    Yes, Is there anything I can help ?
                                </p>
                            </div>
                        </div>
                        <div className="d-flex ms-4 mt-4">
                            <input
                                type="text"
                                className="form-control mb-4 p-3 bg-input text-white"
                                id="formGroupExampleInput"
                                placeholder="Send Message"
                                style={{ border: "none" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComplainUser