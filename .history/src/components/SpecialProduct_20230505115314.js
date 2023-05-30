import React from 'react'
import ReactStars from 'react-star-rating-component';

const SpecialProduct = () => {
    return (
        <div className='col-4'>
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                    </div>
                    <div className="special-product-content">
                        <h5 className='brand'>Havels</h5>
                        <h6 className="title">
                            Samsung Galaxy Note 10+ Mobile Phone
                        </h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value="3"
                            editing={false}
                            activeColor="#ffd700"
                        />
                        <p className="price">
                            <span className="red-p">
                                $100
                            </span> &nbsp;
                            <strike>$200</strike>
                        </p>
                        <div className="discount-till d-flex align-item-center">
                            <p>
                                <b>5 days</b>
                            </p>
                            <div className='d-flex gap-10'>
                                <span className='badge rounded-circle p-3 bg-warning'>1</span>
                                <span className='badge rounded-circle p-3 bg-warning'>1</span>
                                <span className='badge rounded-circle p-3 bg-warning'>1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct