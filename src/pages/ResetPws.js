import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { useLocation } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../features/users/userSlice'

const passwordSchema = yup.object({
    password: yup.string().required('Password is required'),
});

const ResetPws = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const getToken = location.pathname.split("/")[2]
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: passwordSchema,
        onSubmit: values => {
            dispatch(resetPassword({token: getToken, password: values.password}))
            navigate('/login')
        },
    });
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
                                <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                                    <div className='mt-3'>
                                        <input type="password" name='password' placeholder='New Password' className='form-control' value={formik.values.password} onChange={formik.handleChange('password')} onBlur={formik.handleBlur('password')} />
                                        <div className='error'>
                                            {
                                                formik.touched.password && formik.errors.password
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className='button border-0' type='submit'>Submit</button>
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