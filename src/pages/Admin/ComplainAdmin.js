import React from 'react'

import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import User1 from '../../assets/images/User1.png'
import User2 from '../../assets/images/User2.png'

const ComplainAdmin = () => {
    return (
        <>
            <NavbarAdmin />
            <div className="container mt-5 text-white">
                <div className="row">
                    <div className="col-4 d-flex">
                        <div>
                            <div className="d-flex">
                                <img
                                    className="me-3 rounded-circle"
                                    src={User1}
                                    alt="user1"
                                    height={"50px"}
                                />
                                <div>
                                    <p className="px-0 mb-2">Justian</p>
                                    <p>Hello Admin, I Need Your Help</p>
                                </div>
                            </div>
                            <div className="d-flex mt-4">
                                <img
                                    className="me-3 rounded-circle"
                                    src={User2}
                                    alt="user2"
                                    height={"50px"}
                                />
                                <div>
                                    <p className="px-0 mb-2">beach_lover</p>
                                    <p>Hello Admin, This Problem Product to Me</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="d-flex ms-auto"
                            style={{ height: "600px" }}
                        >
                            <div class="vr"></div>
                        </div>
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-end">
                        <div className="d-flex ms-3">
                            <img
                                className="me-3 rounded-circle"
                                src={User1}
                                alt="user1"
                                height={"50px"}
                            />
                            <div className="d-flex">
                                <p className="bg-dark p-3 rounded-pill">
                                    Hello Admin, I Need Your Help
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

export default ComplainAdmin