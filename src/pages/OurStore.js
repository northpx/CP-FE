import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
function OurStore() {
  const [grid, setGrid] = useState(3)
  return (
    <>
      <Meta title={"Our Store"}></Meta>
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Shop by Categories
                </h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Filter by
                </h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id="avai-0" />
                      <label className='form-check-label' htmlFor='avai-0'>
                        In stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id="avai-1" />
                      <label className='form-check-label' htmlFor='avai-1'>
                        Out of stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className='d-flex align-items-center gap-15'>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="from" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput1" placeholder="to" />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id="color-1" />
                      <label className='form-check-label' htmlFor='color-1'>
                        S (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id="color-2" />
                      <label className='form-check-label' htmlFor='color-2'>
                        M (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id="color-3" />
                      <label className='form-check-label' htmlFor='color-3'>
                        L (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id="color-4" />
                      <label className='form-check-label' htmlFor='color-4'>
                        XL (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id="color-5" />
                      <label className='form-check-label' htmlFor='color-5'>
                        XXL (1)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Product Tags
                </h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Watch</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Wire</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Ipad</span>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Random Products
                </h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        editing={false}
                        activeColor="#ffd700"
                      />
                      <div>
                        <b>$300</b>
                      </div>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        editing={false}
                        activeColor="#ffd700"
                      />
                      <div>
                        <b>$300</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{ "width": "100px" }}>Sort by</p>
                    <select name="" defaultValue='best-selling' className='form-control form-select' id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best selling</option>
                      <option value="a-z">A-Z</option>
                      <option value="z-a">Z-A</option>
                      <option value="price-ascend">Low to high</option>
                      <option value="price-desc">High to low</option>
                      <option value="created-ascend">Old to new</option>
                      <option value="created-desc">New to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className="totalproducts mb-0">21 products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img onClick={() => { setGrid(3) }} src="images/gr4.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={() => { setGrid(4) }} src="images/gr3.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={() => { setGrid(6) }} src="images/gr2.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={() => { setGrid(12) }} src="images/gr.svg" className='d-block img-fluid' alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list mt-2">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore