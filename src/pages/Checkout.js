import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
const Checkout = () => {
    return (
        <>
            <section className='checkout-wrapper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data pe-5">
                                <h3 className='website-name'>Digitic.</h3>
                                <nav style={{ "--bs-breadcrumb-divider": '>' }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/cart" className='text-dark'>Cart</Link></li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">Information</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">Shipping</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h4 className='title'>Contact Information</h4>
                                <p className='user-details'>Bac Pham Xuan (coikhotinh1011@gmail.com)</p>
                                <h4 className='title'>Address Infor</h4>
                                <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='First name' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='Last name' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Mobile number' className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Address' className='form-control' />
                                    </div>
                                    <div className="flex-grow-1">
                                        <select name="" id="" defaultValue='select-district' className='form-control form-select'>
                                            <option value="select-district" disabled>Select District</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name='' defaultValue='select-province' className='form-control form-select'>
                                            <option value="select-province" disabled>Select Province</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='zip CODE' className='form-control' />
                                    </div>

                                    <div className='w-100'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to='/cart' className='text-dark'><BiArrowBack className='fs-5 me-2'></BiArrowBack>Back to cart</Link>
                                            <Link to='/cart' className='button'>Continue to Shipping</Link>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className='border-bottom py-4'>
                                <div className='product-checkout d-flex gap-15 justify-content-between align-items-center mb-3'>
                                    <div className='w-25 position-relative'>
                                        <span className='position-absolute badge rounded-circle'>1</span>
                                        <img src="/images/watch.jpg" alt="product" className='img-fluid rounded-3' />
                                    </div>
                                    <div className='d-flex flex-column align-items-start justify-content-center mt-1'>
                                        <h5 className="title mb-0">Kids headphone bulk 10 pack multi colored for students</h5>
                                        <p>Yellow</p>
                                    </div>
                                    <div>
                                        <h5>$100</h5>
                                    </div>
                                </div>
                                <div className='product-checkout d-flex gap-15 justify-content-between align-items-center'>
                                    <div className='w-25 position-relative'>
                                        <span className='position-absolute badge rounded-circle'>1</span>
                                        <img src="/images/watch.jpg" alt="product" className='img-fluid rounded-3' />
                                    </div>
                                    <div className='d-flex flex-column align-items-start justify-content-center mt-1'>
                                        <h5 className="title mb-0">Kids headphone bulk 10 pack multi colored for students</h5>
                                        <p>Yellow</p>
                                    </div>
                                    <div>
                                        <h5>$100</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>Subtotal</p>
                                    <p>$200</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>Shipping fee</p>
                                    <p>$50</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'>Total</h4>
                                <p className='total-price'>$250</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout