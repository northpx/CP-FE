import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../features/users/userSlice'
const Order = () => {
    const dispatch = useDispatch()
    const orderState = useSelector((state) => state?.auth?.getorderedProduct?.orders)

    useEffect(() => {
        dispatch(getOrders())
    }, [])
    return (
        <>
            <Meta title={"My Order"}></Meta>
            <BreadCrumb title="My Order" />
            <section className='cart-wrapper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-3">
                                    <h5>Order ID</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Total Amount</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Total Amount after discount</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Status</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            {
                                orderState && orderState?.map((item, index) => {
                                    return (
                                        <div className="row pt-3 my-3" key={index} style={{background: '#febd69'}}>
                                            <div className="col-3">
                                                <p>{item?._id}</p>
                                            </div>
                                            <div className="col-3">
                                                <p>{item?.totalPrice}</p>
                                            </div>
                                            <div className="col-3">
                                                <p>{item?.totalPriceAfterDiscount}</p>
                                            </div>
                                            <div className="col-3">
                                                <p>{item?.orderStatus}</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="row py-3" style={{background: '#232f3e'}}>
                                                    <div className="col-3">
                                                        <h6 className='text-white'>Product Name</h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className='text-white'>Quantity</h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className='text-white'>Price</h6>
                                                    </div>
                                                    <div className="col-3">
                                                        <h6 className='text-white'>Color</h6>
                                                    </div>
                                                    {
                                                        item?.orderItems?.map((i, index) => {
                                                            return (
                                                                <div className="col-12">
                                                                    <div className="row py-3">
                                                                        <div className="col-3">
                                                                            <p className='text-white'>{i?.product?.title}</p>
                                                                        </div>
                                                                        <div className="col-3">
                                                                            <p className='text-white'>{i?.quantity}</p>
                                                                        </div>
                                                                        <div className="col-3">
                                                                            <p className='text-white'>{i?.price}</p>
                                                                        </div>
                                                                        <div className="col-3">
                                                                            <p className='text-white'>{i?.color?.title}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Order