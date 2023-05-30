import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <>
            <Meta title={"Sign Up"}></Meta>
            <BreadCrumb title="Sign Up" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Create an account</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="text" name='name' placeholder='Name' className='form-control'/>     
                                    </div>
                                    <div className='mt-3'>
                                        <input type="email" name='email' placeholder='Email' className='form-control'/>     
                                    </div>
                                    <div className='mt-3'>
                                        <input type="text" name='phonenumber' placeholder='Mobile Number' className='form-control'/>     
                                    </div>
                                    <div className='mt-3'>
                                        <input type="password" name='password' placeholder='Password' className='form-control'/>     
                                    </div>
                                    <div>
                                        <Link to='/login'>You have an account?</Link>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className='button border-0'>Create</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup