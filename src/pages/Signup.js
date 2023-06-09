import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { registerUser } from '../features/users/userSlice'

const signupSchema = yup.object({
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required'),
    email: yup.string().email('Email should be a valid').required('Email address is required'),
    mobile: yup.string().required('Phone Number is required'),
    password: yup.string().required('Password is required'),
});

const Signup = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema: signupSchema,
        onSubmit: values => {
            dispatch(registerUser(values));
        },
    });

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
                                <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="text" name='firstname' placeholder='First Name' className='form-control' value={formik.values.firstname} onChange={formik.handleChange('firstname')} onBlur={formik.handleBlur('firstname')}/>
                                    </div>
                                    <div className='error'>
                                        {
                                            formik.touched.firstname && formik.errors.firstname
                                        }
                                    </div>
                                    <div className='mt-3'>
                                        <input type="text" name='lastname' placeholder='Last Name' className='form-control' value={formik.values.lastname} onChange={formik.handleChange('lastname')} onBlur={formik.handleBlur('lastname')}/>
                                    </div>
                                    <div className='error'>
                                        {
                                            formik.touched.lastname && formik.errors.lastname
                                        }
                                    </div>
                                    <div className='mt-3'>
                                        <input type="email" name='email' placeholder='Email' className='form-control' value={formik.values.email} onChange={formik.handleChange('email')} onBlur={formik.handleBlur('email')}/>
                                    </div>
                                    <div className='error'>
                                        {
                                            formik.touched.email && formik.errors.email
                                        }
                                    </div>
                                    <div className='mt-3'>
                                        <input type="text" name='mobile' placeholder='Mobile Number' className='form-control' value={formik.values.mobile} onChange={formik.handleChange('mobile')} onBlur={formik.handleBlur('mobile')}/>
                                    </div>
                                    <div className='error'>
                                        {
                                            formik.touched.mobile && formik.errors.mobile
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