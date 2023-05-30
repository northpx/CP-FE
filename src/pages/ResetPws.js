import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const ResetPws = () => {
  return (
    <>
    <Meta title={"Reset password"}></Meta>
    <BreadCrumb title="Reset password" />
    <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Reset your password</h3>
                        <form action="" className='d-flex flex-column gap-15'>
                            <div className='mt-3'>
                                <input type="password" name='password' placeholder='New Password' className='form-control'/>     
                            </div>
                            <div className='mt-3'>
                                <input type="password" name='confpassword' placeholder='Confirm Password' className='form-control'/>     
                            </div>
                            <div>
                                <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                    <button className='button border-0'>Submit</button>
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

export default ResetPws