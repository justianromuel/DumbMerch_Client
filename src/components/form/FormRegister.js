import React, { useState } from 'react'

const FormRegister = () => {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleOnChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        localStorage.setItem("dataUser", JSON.stringify(register));
        console.log("Register Success");
    }

    return (
        <div className="d-flex align-items-center">
            <div className="col-md-8 mx-auto bg-secondary bg-opacity-10 rounded">
                <form onSubmit={handleFormSubmit} className='p-4'>
                    <h2 className='mb-4 fw-bolder text-white'>Register</h2>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            className="form-control bg-input text-white"
                            onChange={handleOnChange}
                            value={register.name}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            className="form-control bg-input text-white"
                            onChange={handleOnChange}
                            value={register.email}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            className="form-control bg-input text-white"
                            onChange={handleOnChange}
                            value={register.password}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-danger col-12 fs-6 fw-bold"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormRegister