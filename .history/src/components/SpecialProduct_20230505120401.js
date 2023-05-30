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
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className='mb-0'>
                                <b>5 </b>days
                            </p>
                            <div className='d-flex gap-50 align-items-center'>
                                <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                                <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                                <span className='badge rounded-circle p-3 bg-warning'>1</span>
                            </div>
                            <div className="prod-count">
                                <p>Products: 5</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "25%"}}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct