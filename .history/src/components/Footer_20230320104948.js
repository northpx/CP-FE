import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
                <span className="input-group-text px-2 py-1" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white'>
                  Hno : 08 Ha Van Tinh <br />
                  Da Nang, Viet Nam <br />
                  Pincode: 1020101
                </address>
                <a href="tel:+84 38 693 2426" className="mt-4 d-block mb-2 text-white">+84 38 693 2426</a>
                <a href="email:phxbac1701@gmail.com" className="mt-4 d-block mb-0 text-white">phxbac1701@gmail.com</a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className='text-white' href="">
                    <BsLinkedin className='fs-4'/>
                  </a>
                  <a href="">
                    <BsGithub />
                  </a>
                  <a href="">
                    <BsInstagram/>
                  </a>
                  <a href="">
                    <BsYoutube/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy policy</Link>
                <Link className='text-white py-2 mb-1'>Refund policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping policy</Link>
                <Link className='text-white py-2 mb-1'>Term & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
                {/* <Link className='text-white py-2 mb-1'>Watch</Link> */}
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptop</Link>
                <Link className='text-white py-2 mb-1'>Headphone</Link>
                <Link className='text-white py-2 mb-1'>Tablet</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Bac Pham Xuan 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer