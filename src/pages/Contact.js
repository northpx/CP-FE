import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
const Contact = () => {
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
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name'/>
                    </div>
                    <div>
                      <input type="text" className="form-control" placeholder='Email'/>
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea name="" id="" className='w-100 form-control' cols="30" rows="7" placeholder='Comments'></textarea>
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