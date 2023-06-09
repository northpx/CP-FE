import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/users/userSlice'
import { useFormik } from 'formik'
import * as yup from 'yup';

const loginSchema = yup.object({
    email: yup.string().email('Email should be a valid').required('Email address is required'),
    password: yup.string().required('Password is required'),
});

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authState = useSelector((state) => state?.auth)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            dispatch(loginUser(values));
            if(authState.isSuccess === true){
                navigate('/')
            }
            else{
                navigate('/login')
            }
        },
    });

    return (
        <>
            <Meta title={"Log In"}></Meta>
            <BreadCrumb title="Log In" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Login</h3>
                                <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="email" name='email' placeholder='Email' className='form-control'value={formik.values.email} onChange={formik.handleChange('email')} onBlur={formik.handleBlur('email')}/>
                                    </div>
                                    <div className='error'>
                                        {
                                            formik.touched.email && formik.errors.email
                                        }
                                    </div>
                                    <div className='mt-3'>
                                        <input type="password" name='password' placeholder='Password' className='form-control' value={formik.values.password} onChange={formik.handleChange('password')} onBlur={formik.handleBlur('password')}/>
                                    </div>
                                    <div className='error'>
                                        {
                                            formik.touched.password && formik.errors.password
                                        }
                                    </div>
                                    <div>
                                        <Link to='/forgot-password'>Forgot Password?</Link>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className='button border-0' type='submit'>Login</button>
                                            <Link className='button signup' to='/signup'>Sign Up</Link>
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

export default Login