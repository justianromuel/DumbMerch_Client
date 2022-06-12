import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import NavbarUser from '../../components/navbar/NavbarUser'
import DataDummy from '../../assets/fakeData/DataDummy'

const Home = () => {
    return (
        <>
            <NavbarUser />
            <div className="container text-danger mt-5">
                <h3 className="mb-3">Product</h3>
                <Row className='d-flex align-items-center'>
                    {DataDummy.map((Data, index) => (
                        <Col md='2'>
                            <Link to={`/detail-product/${index}`} className='m-1' style={{ textDecoration: 'none' }}>
                                <div className="text-white">
                                    <div className="card bg-dark">
                                        <img
                                            className="img-fluid"
                                            style={{ height: '312px' }}
                                            src={Data.photo}
                                            alt="card-image"
                                        />
                                        <div className="p-2">
                                            <h5 className='text-danger fw-bold'>{Data.name}</h5>
                                            <p className='mb-1'>Rp.{Data.price},00</p>
                                            <p className='mb-0'>Stock : {Data.qty}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default Home