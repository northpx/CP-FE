import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {AiOutlineHeart} from 'react-icons/ai'
import {BiGitCompare} from 'react-icons/bi'
import { Link } from 'react-router-dom';
const SingleProduct = () => {
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
    const props = { width: 500, height: 600, zoomWidth: 600, img: "/images/tab.jpg" };
    const [orderProduct, setorderProduct] = useState(true)
    return (
        <>
            <Meta title={"Product"}></Meta>
            <BreadCrumb title="Product" />
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
                                    <h3 className='title'>Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className='price'>$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            name='star'
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
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
                                        <p className="product-data mb-0">Apple</p>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center my-2">
                                        <h3 className="product-heading mb-0">Categories:</h3>
                                        <p className="product-data mb-0">Mini Laptop</p>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center my-2">
                                        <h3 className="product-heading mb-0">Tags:</h3>
                                        <p className="product-data mb-0">Tablet</p>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center my-2">
                                        <h3 className="product-heading mb-0">Available:</h3>
                                        <p className="product-data mb-0">14 in stock</p>
                                    </div>
                                    <div className="d-flex gap-15 flex-column mt-2 mb-2">
                                        <h3 className="product-heading mb-0">Color:</h3>
                                        <Color></Color>
                                    </div>
                                    <div className="d-flex gap-15 align-items-center my-2">
                                        <h3 className="product-heading mb-0">Quantity:</h3>
                                        <input type="number" name='' className='form-control' id='' defaultValue={1} min={1} max={10} style={{ width: "70px" }} />
                                        <div className='d-flex align-items-center gap-15 ms-5'>
                                            <button className='button border-0'>ADD TO CART</button>
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
                                        <Link href="javascript:void(0)" onClick={()=>{
                                            copyToClipboard("http://localhost:3000/product/:id")
                                        }}>
                                            Copy product link
                                        </Link>
                                    </div>
                                </div>
                                <div className="py-5">
                                    <h3 className="title text-center">Payment Methods</h3>
                                    <div><img src="/images/payment.jpg" alt="" className='img-fluid'/></div>
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur recusandae voluptatum quidem quos esse doloremque nemo, numquam id quia iste dicta incidunt error nihil corporis alias vel autem vitae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, facere corporis voluptate quae atque veritatis unde nesciunt animi rem earum cum voluptatem neque, consectetur amet veniam. Illum quibusdam dolor laboriosam!
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
                                                count={5}
                                                size={24}
                                                value={4}
                                                editing={false}
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
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={1}
                                                editing={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className='w-100 form-control' cols="30" rows="7" placeholder='Comments'></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className="button border-0">Send review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Bac Pham</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={1}
                                                editing={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magnam id, quae illo nulla, necessitatibus fugiat molestias delectus voluptatibus suscipit repellendus quam adipisci laborum tempora nemo? Fuga ea consectetur quibusdam!</p>
                                    </div>
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
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct