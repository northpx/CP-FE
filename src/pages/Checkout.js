import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup';
import axios from 'axios'
import { base_url, config } from '../utils/axiosConfig'
import { createAnOrder } from '../features/users/userSlice'

const checkOutSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    address: yup.string().required('Address is required'),
    other: yup.string().required('Other is required'),
    state: yup.string().required('State is required'),
    city: yup.string().required('City is required'),
    pincode: yup.number('Pincode is a Number').required('CODE is required')
});

const Checkout = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            address: '',
            other: '',
            state: '',
            city: '',
            pincode: '', 
        },
        validationSchema: checkOutSchema,
        onSubmit: values => {
            setShippingInfo(values)
            setTimeout(()=>{checkOutHandler()},300)

        },
    });

    const cartState = useSelector((state) => state?.auth?.cartProducts)
    const [totalAmount, setTotalAmount] = useState(null)
    const [shippingInfo, setShippingInfo] = useState(null)
    const [paymentInfo, setPaymentInfo] = useState({razorpayPaymentId: "", razorpayOrderId:""})
    console.log(paymentInfo,shippingInfo);
    const [cartItems, setCartItems] = useState(null);
    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < cartState?.length; i++) {
            sum = sum + (Number(cartState[i].quantity) * Number(cartState[i].price))
            setTotalAmount(sum)
        }
    }, [cartState])

    const loadScript = (src) =>{
        return new Promise((resolve)=>{
            const script = document.createElement('script')
            script.src = src;
            script.onload = () =>{
                resolve(true)
            }
            script.onerror = () =>{
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    useEffect(()=>{
        let items = []
        for(let i= 0; i< cartState?.length; i++){
            items.push({product: cartState[i].productId._id, quantity: cartState[i].quantity,color: cartState[i].color._id, price: cartState[i].price})
        }
        setCartItems(items)
    }, [])

    const checkOutHandler = async () =>{
        const res= await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(!res) {
            alert("Razor SDK failed to load")
            return;
        }
        const result = await axios.post(`${base_url}user/order/checkout`, {amount: totalAmount+5}, config)
        if(!result){
            alert('Something went wrong')
            return;
        }
        const  {amount, id: order_id, currency} = result.data.order;
        console.log(result)
        const options = {
            key: "rzp_test_2GiKygSjLmaRJ5", // Enter the Key ID generated from the Dashboard
            amount: amount,
            currency: currency,
            name: "Bac Pham",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                };

                const result = await axios.post(`${base_url}user/order/paymentVerification`,data, config);
                setPaymentInfo({
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                })
                dispatch(createAnOrder({totalPrice: totalAmount, totalPriceAfterDiscount: totalAmount, orderItems:cartItems, paymentInfo, shippingInfo}))
            },
            prefill: {
                name: "Bac Pham",
                email: "phxbac1701@gmail.com",
                contact: "9999999999",
            },
            notes: {
                address: "156 Ton Dan",
            },
            theme: {
                color: "#61dafb",
            },
        };  
        
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

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
                                <form action="" onSubmit={formik.handleSubmit} className='d-flex gap-15 flex-wrap justify-content-between'>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='First name' name='firstName' className='form-control' value={formik.values.firstName} onChange={formik.handleChange('firstName')} onBlur={formik.handleBlur('firstName')}/>
                                        <div className='error'>
                                            {formik.touched.firstName && formik.errors.firstName}
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='Last name' name='lastName' className='form-control' value={formik.values.lastName} onChange={formik.handleChange('lastName')} onBlur={formik.handleBlur('lastName')}/>
                                        <div className='error'>
                                            {formik.touched.lastName && formik.errors.lastName}
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Address' name='address' className='form-control' value={formik.values.address} onChange={formik.handleChange('address')} onBlur={formik.handleBlur('address')}/>
                                        <div className='error'>
                                            {formik.touched.address && formik.errors.address}
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Other' name='other' className='form-control' value={formik.values.other} onChange={formik.handleChange('other')} onBlur={formik.handleBlur('other')}/>
                                        <div className='error'>
                                            {formik.touched.other && formik.errors.other}
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder='State' name='state' className='form-control' value={formik.values.state} onChange={formik.handleChange('state')} onBlur={formik.handleBlur('state')}/>
                                        <div className='error'>
                                            {formik.touched.state && formik.errors.state}
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name='city' onChange={formik.handleChange('city')} onBlur={formik.handleBlur('city')} value={formik.values.city} className='form-control form-select'>
                                            <option value="select-province" disabled>Select City</option>
                                            <option value="Danang">Da Nang</option>
                                            <option value="Nghean">Nghe An</option>
                                        </select>
                                        <div className='error'>
                                            {formik.touched.city && formik.errors.city}
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder='zip CODE' name='pincode' className='form-control' value={formik.values.pincode} onChange={formik.handleChange('pincode')} onBlur={formik.handleBlur('pincode')}/>
                                        <div className='error'>
                                            {formik.touched.pincode && formik.errors.pincode}
                                        </div>
                                    </div>

                                    <div className='w-100'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to='/cart' className='text-dark'><BiArrowBack className='fs-5 me-2'></BiArrowBack>Back to cart</Link>
                                            <Link to='/' className='button'>Continue to shipping</Link>
                                            <button type='submit' className='button' onClick={checkOutHandler}>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className='border-bottom py-4'>
                                {
                                    cartState && cartState?.map((item, index) => {
                                        return (
                                            <div key={index} className='product-checkout d-flex gap-10 justify-content-between align-items-center mb-3'>
                                                <div className='w-25 position-relative'>
                                                    <span className='position-absolute badge rounded-circle'>{item?.quantity}</span>
                                                    <img src="/images/watch.jpg" alt="product" className='img-fluid rounded-3' />
                                                </div>
                                                <div className='d-flex flex-column align-items-start justify-content-center mt-1'>
                                                    <h5 className="title mb-0">{item?.productId?.title}</h5>
                                                    <p>Color: {item?.color.title}</p>
                                                </div>
                                                <div>
                                                    <h5>$ {item?.price * item?.quantity}</h5>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>Subtotal</p>
                                    <p>$ {totalAmount ? totalAmount : "0"}</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>Shipping fee</p>
                                    <p>$ 5</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'>Total</h4>
                                <p className='total-price'>$ {totalAmount ? totalAmount + 5 : "0"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout