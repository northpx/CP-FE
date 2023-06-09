import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../features/products/productSlice';

const ProductCard = (props) => {
  const { grid, data } = props
  const dispatch = useDispatch()
  let location = useLocation();
  const addToWish = (id) =>{
    dispatch(addToWishlist(id))
  }
  return (
    <>
      { data &&
        data?.map((item, index) => {
          return (
            <div key={index} className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <button className='border-0 bg-transparent' onClick={(e)=>{addToWish(item?._id)}}>
                    <img src="/images/wish.svg" alt="wishlist" />
                  </button>
                </div>
                <div className="product-image">
                  <img src="/images/tab1.jpg" className='product-img' alt="product img" />
                  <img src="/images/tab.jpg" className='product-img' alt="product img" />
                </div>
                <div className="product-details">
                  <h6 className='brand'>{item?.brand?.title}</h6>
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
                  <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>{item?.description}</p>
                  <p className="price">$ {item?.price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <div>
                      <img src="/images/prodcompare.svg" alt="prodcompare" />
                    </div>
                    <Link to={'/product/'+item?._id} className='border-0 bg-transparent'>
                      <img src="/images/view.svg" alt="view" />
                    </Link>
                    <div>
                      <img src="/images/add-cart.svg" alt="add cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default ProductCard