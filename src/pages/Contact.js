import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { createQuery } from '../features/contacts/contactSlice'

const contactSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email should be a valid').required('Email address is required'),
  mobile: yup.string().required('Phone Number is required'),
  comment: yup.string().required('Comment is required'),
});

const Contact = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        mobile: '',
        comment: '',
    },
    validationSchema: contactSchema,
    onSubmit: values => {
        dispatch(createQuery(values))
    },
});

  return (
    <>
      <Meta title={"Contact Us"}></Meta>
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245368.28264173746!2d107.91331465954539!3d16.071745991916725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1685334422537!5m2!1svi!2s" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map' />
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name' name='name' onChange={formik.handleChange('name')} onBlur={formik.handleBlur('name')} value={formik.values.name}/>
                      <div className="error">
                        {formik.touched.name && formik.errors.name}
                      </div>
                    </div>
                    <div>
                      <input type="text" className="form-control" placeholder='Email' name='email' onChange={formik.handleChange('email')} onBlur={formik.handleBlur('email')} value={formik.values.email}/>
                      <div className="error">
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Mobile Number'name='mobile' onChange={formik.handleChange('mobile')} onBlur={formik.handleBlur('mobile')} value={formik.values.mobile}/>
                      <div className="error">
                        {formik.touched.mobile && formik.errors.mobile}
                      </div>
                    </div>
                    <div>
                      <textarea id="" className='w-100 form-control' cols="30" rows="7" placeholder='Comments' name='comment' onChange={formik.handleChange('comment')} onBlur={formik.handleBlur('comment')} value={formik.values.comment}/>
                      <div className="error">
                        {formik.touched.comment && formik.errors.comment}
                      </div>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch with us</h3>
                  <div className='py-2'>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiFillHome className='fs-5' />
                        <address className='mb-0'>156 Ton Dan, Hoa An, Cam Le, Danang</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5'/>
                        <a href="+84 38 693 2426">+84 38 693 2426</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <MdEmail className='fs-5' />
                        <a href="coikhotinh1011@gmail.com">coikhotinh1011@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiFillInfoCircle className='fs-5' />
                        <p className='mb-0'>Monday - Friday 10AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact