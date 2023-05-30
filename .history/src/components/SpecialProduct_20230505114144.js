import React from 'react'

const SpecialProduct = () => {
  return (
    <div className='col-4'>
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="special-product-content">
                    <h5 className='brand'>Havels</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct