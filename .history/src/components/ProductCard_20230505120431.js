import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from 'react-star-rating-component';
const ProductCard = () => {
  return (
    <Link className='col-2'>
      <div className="product-card position-relative">
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
      </div>
    </Link>
  )
}

export default ProductCard