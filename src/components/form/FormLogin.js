import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const FormLogin = () => {
    const navigate = useNavigate();

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const handleLogin = (e) => {
        e.preventDefault();

        let data = localStorage.getItem("dataUser");
        let dataLogin = JSON.parse(data);

        if (emaillog === dataLogin.email && passwordlog === dataLogin.password) {
            navigate("/home");
            console.log("Login Success");
        }
    }

    return (
        <div className="d-flex align-items-center">
            <div className="col-md-8 mx-auto bg-secondary bg-opacity-10 rounded">
                <form onSubmit={handleLogin} className='p-4'>
                    <h2 className='mb-4 fw-bolder text-white'>Login</h2>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control bg-input text-white"
                            placeholder='Email'
                            onChange={(e) => setEmaillog(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control bg-input text-white"
                            placeholder='Password'
                            onChange={(e) => setPasswordlog(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-danger col-12 fs-6 fw-bold"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormLogin