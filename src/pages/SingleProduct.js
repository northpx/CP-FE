import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { AiOutlineHeart } from 'react-icons/ai'
import { BiGitCompare } from 'react-icons/bi'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addRate, getAProduct, getAllProducts } from '../features/products/productSlice';
import { toast } from 'react-toastify'
import { addProdToCart, getProdCart } from '../features/users/userSlice';


const SingleProduct = () => {
    const location = useLocation()
    const getProdId = location.pathname.split('/')[2]
    const dispatch = useDispatch()
    const [color, setColor] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [alreadyAdded, setAlreadyAdded] = useState(false)
    const [popularProduct, setPopularProduct] = useState([])
    const navigate = useNavigate()
    const productState = useSelector((state) => state?.product?.singleproduct)
    const productsState = useSelector((state) => state?.product?.product)
    const cartState = useSelector((state) => state.auth?.cartProducts)
    const [star, setStar] = useState(null)
    const [comment, setComment] = useState(null)



    useEffect(() => {
        dispatch(getAProduct(getProdId));
        dispatch(getProdCart())
        dispatch(getAllProducts())
    }, [])

    useEffect(() => {
        for (let index = 0; index < cartState?.length; index++) {
            if (getProdId === cartState[index]?.productId?._id) {
                setAlreadyAdded(true)
            }
        }
    }, [])


    const uploadCart = () => {
        if (color === null) {
            toast.error('Please choose color')
            return false;
        }
        else {
            dispatch(addProdToCart({ productId: productState?._id, quantity, color, price: productState?.price }))
            setTimeout(() => {
                navigate('/cart')
            }, 200)
        }
    }
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    useEffect(() => {
        let data = []
        for (let index = 0; index < productsState?.length; index++) {
            const element = productsState[index];
            if (element.tags === 'popular') {
                data.push(element)
            }
        }
        setPopularProduct(data)
    }, [productsState])
    const props = { width: 500, height: 600, zoomWidth: 600, img: productState?.images[0]?.url ? productState?.images[0]?.url : "/images/tab.jpg" };
    const [orderProduct, setorderProduct] = useState(true)

    const addRatingToProd = () => {
        if (star === null) {
            toast.warning('Please add rating star')
            return false
        }
        else if (comment === null) {
            toast.warning('Please write a comment')
            return false
        }
        else {
            dispatch(addRate({ star: star, comment: comment, prodId: getProdId }))
            setTimeout(() => {
                dispatch(getAProduct(getProdId))
            },500)
        }
        return false
    }

    return (
        <>
            <Meta title={"Product"}></Meta>
            <BreadCrumb title={productState?.title} />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div><ReactImageZoom {...props} /></div>
                                <div className="other-product-images d-flex flex-wrap gap-10 justify-content-between">
                                    <div>
                                        <img src="/images/headphone.jpg" className='img-fluid' alt="" />
                                    </div>
                                    <div>
                                        <img src="/images/headphone.jpg" alt="" className='img-fluid' />
                                    </div>
                                    <div>
                                        <img src="/images/tab1.jpg" alt="" className='img-fluid' />
                                    </div>
                                    <div>
                                        <img src="/images/tab1.jpg" alt="" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom py-3">
                                    <h3 className='title'>{productState?.title}</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className='price'>$ {productState?.price}</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={productState?.totaltating}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 t-review'>(2 Reviews)</p>
                                    </div>
                                    <a href="#review">Write a review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex gap-15 align-items-center my-2">
                                        <h3 className="product-heading mb-0">Type:</h3>
                                        <p className="product-data mb-0">Tablet</p>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center my-2">
                                        <h3 className="product-heading mb-0">Brand:</h3>
                                        <p className="product-data mb-0">{productState?.brand?.title}</p>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center my-2">
                                        <h3 className="product-heading mb-0">Categories:</h3>
                                        <p className="product-data mb-0">{productState?.category?.title}</p>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center my-2">
                                        <h3 className="product-heading mb-0">Tags:</h3>
                                        <p className="product-data mb-0 text-capitalize">{productState?.tags}</p>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center my-2">
                                        <h3 className="product-heading mb-0">Available:</h3>
                                        <p className="product-data mb-0">14 in stock</p>
                                    </div>
                                    {
                                        alreadyAdded === false &&
                                        <>
                                            <div className="d-flex gap-15 flex-column mt-2 mb-2">
                                                <h3 className="product-heading mb-0">Color:</h3>
                                                <Color setColor={setColor} colorData={productState?.color}></Color>
                                            </div>
                                        </>
                                    }
                                    <div className="d-flex gap-15 align-items-center my-2">
                                        {
                                            alreadyAdded === false &&
                                            <>
                                                <h3 className="product-heading mb-0">Quantity:</h3>
                                                <input type="number" name='' className='form-control' id='' min={1} max={10} style={{ width: "70px" }} onChange={(e) => setQuantity(e.target.value)} value={quantity} />
                                            </>
                                        }
                                        <div className={'d-flex align-items-center gap-15 ms-5'}>
                                            <button onClick={() => { alreadyAdded ? navigate('/cart') : uploadCart() }} className='button border-0'>
                                                {alreadyAdded ? "Go to Cart" : "ADD TO CART"}
                                            </button>
                                            <button className='button signup'>BUY NOW</button>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center my-3">
                                        <div>

                                            <Link><AiOutlineHeart className='me-1 fs-5'></AiOutlineHeart>Add to Favorite</Link>
                                        </div>
                                        <div>

                                            <Link><BiGitCompare className='me-1 fs-5'></BiGitCompare>Add to Compare</Link>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-3">
                                        <h3 className="product-heading mb-0">Shipping & Returns:</h3>
                                        <p className="product-data mb-0">
                                            Free shipping and returns available for all orders!<br />
                                            We free ship all Danang domestic orders within <b>5 - 10 business days</b>
                                        </p>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center my-2">
                                        <h3 className="product-heading mb-0">Product link:</h3>
                                        <Link href="javascript:void(0)" onClick={() => {
                                            copyToClipboard(window.location.href)
                                        }}>
                                            Copy product link
                                        </Link>
                                    </div>
                                </div>
                                <div className="py-5">
                                    <h3 className="title text-center">Payment Methods</h3>
                                    <div><img src="/images/payment.jpg" alt="" className='img-fluid' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <p className='bg-white p-3'>
                                {productState?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4 id='review'>Reviews</h4>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Customer Review</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                name='rate3'
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {orderProduct && (
                                        <div>
                                            <Link className='text-dark text-decoration-underline' href="">Write a review</Link>
                                        </div>
                                    )}
                                </div>
                                <div className="review-form py-4">
                                    <h4>Write a review</h4>
                                    <div>
                                        <ReactStars
                                            name='rate4'
                                            count={5}
                                            size={24}
                                            value={1}
                                            edit={true}
                                            activeColor="#ffd700"
                                            onChange={(e) => {
                                                // console.log(e)
                                                setStar(e)
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <textarea name="" id="" className='w-100 form-control' cols="30" rows="7" placeholder='Comments' onChange={(e) => {
                                            // console.log(e)
                                            setComment(e.target.value)
                                        }}></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end mt-3'>
                                        <button onClick={addRatingToProd} className="button border-0" type='button'>Send review</button>
                                    </div>
                                </div>
                                <div className="reviews mt-4">
                                    {
                                        productState && productState.ratings?.map((item, index) => {
                                            return (
                                                <div key={index} className="review">
                                                    <div className='d-flex gap-10 align-items-center'>
                                                        <h6 className='mb-0'>Bac Pham</h6>
                                                        <ReactStars
                                                            name='rate5'
                                                            count={5}
                                                            size={24}
                                                            value={item?.star}
                                                            edit={false}
                                                            activeColor="#ffd700"
                                                        />
                                                    </div>
                                                    <p className='mt-3'>{item?.comment}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading-title'>
                                Our Popular Products
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard data={popularProduct}></ProductCard>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct