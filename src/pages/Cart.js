import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProdCart, removeProdCart, updateProdCart } from '../features/users/userSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const [productQuantity, setProductQuantity] = useState(null)
    const [totalAmount, setTotalAmount] = useState(null)
    const cartState = useSelector((state) => state?.auth?.cartProducts);
    useEffect(() => {
        dispatch(getProdCart())
    }, [])
    useEffect(() => {
        if (productQuantity !== null) {
            dispatch(updateProdCart({ cartItemId: productQuantity?.cartItemId, quantity: productQuantity?.quantity }))
            setTimeout(() => { dispatch(getProdCart()) }, 200)
        }
    }, [productQuantity])

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < cartState?.length; i++) {
            sum = sum + (Number(cartState[i].quantity) * Number(cartState[i].price))
            setTotalAmount(sum)
        }
    }, [cartState])

    const deleteCartProduct = (id) => {
        dispatch(removeProdCart(id))
        setTimeout(() => { dispatch(getProdCart()) }, 200)
    }



    return (
        <>
            <Meta title={"Cart"}></Meta>
            <BreadCrumb title="Cart" />
            <section className="cart-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className='cart-col-1'>Product</h4>
                                <h4 className='cart-col-2'>Price</h4>
                                <h4 className='cart-col-3'>Quantity</h4>
                                <h4 className='cart-col-4'>Total</h4>
                            </div>
                            {
                                cartState && cartState?.map((item, index) => {
                                    return (
                                        <div key={index} className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                                <div className='w-25'>
                                                    <img src="/images/tab1.jpg" alt="product in cart" className='img-fluid' />
                                                </div>
                                                <div className='w-75'>
                                                    <p>{item?.productId.title}</p>
                                                    <p>Color: {item?.color?.title}</p>
                                                    <p>Status: New</p>
                                                </div>
                                            </div>
                                            <div className='cart-col-2'>
                                                <h5 className="price">$ {item?.price}</h5>
                                            </div>
                                            <div className='cart-col-3'>
                                                <div className='d-flex gap-15 align-items-center'>
                                                    <input type="number" className='form-control' min={1} max={10} style={{ width: "80px" }} value={productQuantity?.quantity ? productQuantity?.quantity : item?.quantity} onChange={(e) => { setProductQuantity({ cartItemId: item?._id, quantity: e.target.value }) }} />
                                                    <div className='delete'><RiDeleteBin6Line onClick={() => deleteCartProduct(item?._id)} className='fs-5'></RiDeleteBin6Line></div>
                                                </div>
                                            </div>
                                            <div className='cart-col-4'>
                                                <h5 className='price'>$ {item?.price * item?.quantity}</h5>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-12 py-3 mt-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <Link to='/product' className='button'>Continue to Shopping</Link>
                                {
                                    (totalAmount !== null || totalAmount !== 0) &&
                                    <div className='d-flex flex-column align-items-end'>
                                        <h4>Subtotal: $ {totalAmount}</h4>
                                        <p>Taxes and fee ship calculated at checkout</p>
                                        <Link to='/checkout' className='button signup'>Check Out</Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart