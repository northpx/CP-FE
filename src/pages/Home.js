import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import SliderBanner from '../components/SliderBanner'
import Meta from '../components/Meta'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../features/blogs/blogSlice'
import moment from 'moment'
import { addToWishlist, getAllProducts } from '../features/products/productSlice'
import ReactStars from 'react-rating-stars-component';



const Home = () => {

  const addToWish = (id) => {
    dispatch(addToWishlist(id))
  }

  const blogState = useSelector((state) => state?.blog?.blog)
  const productState = useSelector((state) => state.product.product)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs();
    getProducts();
  }, [])

  const getBlogs = () => {
    dispatch(getAllBlogs())
  }

  const getProducts = () => {
    dispatch(getAllProducts())
  }
  return (
    <>
      <Meta title={"E-Commerce App"}></Meta>
      <section className='home-wrapper-1 banner'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='mainbanner p-0'>
              <SliderBanner />
            </div>
          </div>
        </div>
      </section>

      <Container class1='home-wrapper-1 py-5'>
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" className='img-fluid' alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-12 justify-content-evenly align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" className='img-fluid' alt="small banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Laptop Max</h5>
                  <p>From $599.00 or <br /> $21.62/mo</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" className='img-fluid' alt="small banner" />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From $599.00  or <br /> $51.62/mo</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" className='img-fluid' alt="small banner" />
                <div className="small-banner-content position-absolute">
                  <h4>15% Off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the lastest band <br /> styles and colors</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" className='img-fluid' alt="small banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Free engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity play back & <br /> ultra-low distortion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex ilgn-items-center justify-content-between">
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className='mb-0'>From all oders over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save up to 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Security Payments</h6>
                    <p className='mb-0'>100% protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">              <h3 className='section-heading-title'>
              Product Categories
            </h3>
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Computers &Laptops</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/acc.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/watch1.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="tv" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Home Appllances</h6>
                    <p>5 Items</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading-title'>
                Featured Collection
              </h3>
            </div>
          </div>
          <div className="row">
            {
              productState && productState?.map((item, index) => {
                if (item.tags === "featured") {
                  return (
                    <div key={index} className={"col-3"}>
                      <div className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                          <button className='border-0 bg-transparent' onClick={(e) => { addToWish(item?._id) }}>
                            <img src="/images/wish.svg" alt="wishlist" />
                          </button>
                        </div>
                        <div className="product-image">
                          <img src="/images/tab1.jpg" className='product-img' alt="product img" />
                          <img src="/images/tab.jpg" className='product-img' alt="product img" />
                        </div>
                        <div className="product-details">
                          <h6 className='brand'>{item?.brand.title}</h6>
                          <h5 className="product-title">
                            {item?.title}
                          </h5>
                          <ReactStars
                            name='star'
                            count={5}
                            size={24}
                            value={+item?.totalrating}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="price">$ {item?.price}</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-15">
                            <div>
                              <img src="/images/prodcompare.svg" alt="prodcompare" />
                            </div>
                            <button className='border-0 bg-transparent'>
                              <img onClick={()=>navigate('/product/'+item?._id)} src="/images/view.svg" alt="view" />
                            </button>
                            <div>
                              <img src="/images/add-cart.svg" alt="add cart" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/subbanner-01.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/subbanner-02.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Studio Display</h5>
                  <h6 className='text-dark'>600 nits of brightness</h6>
                  <p className='text-dark'>27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/subbanner-03.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Smartphones</h5>
                  <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                  <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/subbanner-04.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Home Speakers</h5>
                  <h6 className='text-dark'>Room-filling Sounds</h6>
                  <p className='text-dark'>From $699 or $116.58/mo. for 12mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading-title">
                Special Products
              </h3>
            </div>
          </div>
          <div className="row">
            {
              productState && productState?.map((item, index) => {
                if (item.tags === "special") {
                  return (
                    <SpecialProduct key={index} brand={item?.brand.title} title={item?.title} totalrating={+item?.totalrating} price={item?.price} sold={item?.sold} quantity={item?.quantity} />
                  )
                }
              })
            }
          </div>
        </div>
      </section>
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
            {
              productState && productState?.map((item, index) => {
                if (item.tags === "popular") {
                  return (
                    <div key={index} className={"col-3"}>
                      <Link to=':id' className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                          <button className='border-0 bg-transparent' onClick={(e) => { addToWish(item?._id) }}>
                            <img src="/images/wish.svg" alt="wishlist" />
                          </button>
                        </div>
                        <div className="product-image">
                          <img src="/images/tab1.jpg" className='product-img' alt="product img" />
                          <img src="/images/tab.jpg" className='product-img' alt="product img" />
                        </div>
                        <div className="product-details">
                          <h6 className='brand'>{item?.brand.title}</h6>
                          <h5 className="product-title">
                            {item?.title}
                          </h5>
                          <ReactStars
                            name='star'
                            count={5}
                            size={24}
                            value={+item?.totalrating}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="price">$ {item?.price}</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-15">
                            <div>
                              <img src="/images/prodcompare.svg" alt="prodcompare" />
                            </div>
                            <button className='border-0 bg-transparent'>
                              <img onClick={()=>navigate('/product/'+item?._id)} src="/images/view.svg" alt="view" />
                            </button>
                            <div>
                              <img src="/images/add-cart.svg" alt="add cart" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper p-0 card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading-title'>
                Our Latest Blog
              </h3>
            </div>
          </div>
          <div className="row">
            {blogState &&
              blogState?.map((item, index) => {
                return (
                  <div className="col-3" key={index}>
                    <BlogCard id={item?._id} title={item?.title} description={item?.description} image={item?.image[0].url} date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home