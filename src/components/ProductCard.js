import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
const ProductCard = (props) => {
  const { grid } = props
  let location = useLocation();
  return (
    <>
      <div className={` ${location.pathname === "/:id" ? `gr-${grid}` : "col-3"}`}>
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <div>
              <img src="/images/wish.svg" alt="wishlist" />
            </div>
          </div>
          <div className="product-image">
            <img src="/images/tab1.jpg" className='product-img' alt="product img" />
            <img src="/images/tab.jpg" className='product-img' alt="product img" />
          </div>
          <div className="product-details">
            <h6 className='brand'>Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              name='star'
              count={5}
              size={24}
              value={4}
              editing={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque sed illum nesciunt soluta fugit sequi. Ipsam commodi explicabo eligendi blanditiis, sit maxime fugit aut, veniam, dolores magni autem obcaecati. Earum!</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <div>
                <img src="/images/prodcompare.svg" alt="prodcompare" />
              </div>
              <div>
                <img src="/images/view.svg" alt="view" />
              </div>
              <div>
                <img src="/images/add-cart.svg" alt="add cart" />
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/tab1.jpg" className='product-img' alt="product img" />
            <img src="images/tab.jpg" className='product-img' alt="product img" />
          </div>
          <div className="product-details">
            <h6 className='brand'>Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              editing={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque sed illum nesciunt soluta fugit sequi. Ipsam commodi explicabo eligendi blanditiis, sit maxime fugit aut, veniam, dolores magni autem obcaecati. Earum!</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div> */}
    </>
  )
}

export default ProductCard