import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateAnUser } from '../features/users/userSlice';
import {FiEdit} from 'react-icons/fi'

const profileSchema = yup.object({
    firstname: yup.string().required('Firstname is required'),
    lastname: yup.string().required('Lastname is required'),
    email: yup.string().email('Email should be a valid').required('Email address is required'),
    mobile: yup.number('Mobile is number').required('Mobile is required'),
});

const Profile = () => {
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.auth.user)
    const [edit, setEdit] = useState(true)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: userState?.firstname,
            lastname: userState?.lastname,
            email: userState?.email,
            mobile: userState?.mobile,
        },
        validationSchema: profileSchema,
        onSubmit: values => {
            dispatch(updateAnUser(values))
            setEdit(true)
        },
    });

    return (
        <>
            <Meta title={"My Profile"}></Meta>
            <BreadCrumb title="My Profile" />
            <section className='cart-wrapper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className='my-3'>Update Profile</h3>
                                <FiEdit onClick={()=> setEdit(false)} className='fs-3'></FiEdit>
                            </div>
                        </div>
                        <div className="col-12">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="example1" className="form-label">Firstname</label>
                                    <input type="text" disabled={edit} name='firstname' className="form-control" id="example1" value={formik.values.firstname} onChange={formik.handleChange('firstname')} onBlur={formik.handleBlur('firstname')} />
                                    <div className="error">
                                        {formik.touched.firstname && formik.errors.firstname}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="example2" className="form-label">Lastname</label>
                                    <input type="text" disabled={edit} name='lastname' className="form-control" id="example2" value={formik.values.lastname} onChange={formik.handleChange('lastname')} onBlur={formik.handleBlur('lastname')} />
                                    <div className="error">
                                        {formik.touched.lastname && formik.errors.lastname}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="example3" className="form-label">Email address</label>
                                    <input type="email" disabled={edit} name='email' className="form-control" id="example3" aria-describedby="emailHelp" value={formik.values.email} onChange={formik.handleChange('email')} onBlur={formik.handleBlur('email')} />
                                    <div className="error">
                                        {formik.touched.email && formik.errors.email}
                                    </div>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="example4" className="form-label">Mobile</label>
                                    <input type="text" disabled={edit} name='mobile' className="form-control" id="example4" value={formik.values.mobile} onChange={formik.handleChange('mobile')} onBlur={formik.handleBlur('mobile')} />
                                    <div className="error">
                                        {formik.touched.mobile && formik.errors.mobile}
                                    </div>
                                </div>
                                {
                                    edit === false && <button type="submit" className="btn btn-primary">Save</button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile