import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const ForgotPws = () => {
    return (
        <>
            <Meta title={"Forgot Password"}></Meta>
            <BreadCrumb title="Forgot Password" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Forgot Your Password</h3>
                                <p className='text-center mb-3'>We will send you an email to reset your password</p>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="email" name='email' placeholder='Email' className='form-control'/>     
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center flex-column gap-15 align-items-center mt-3">
                                            <button className='button border-0'>Submit</button>
                                            <Link to='/login'>Cancel</Link>
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

export default ForgotPws