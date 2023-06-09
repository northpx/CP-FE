import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import { getAllProducts } from '../features/products/productSlice';


const OurStore = () => {
  const [grid, setGrid] = useState(3)
  const productState = useSelector((state) => state?.product?.product)
  console.log(productState);
  const dispatch = useDispatch()
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  console.log(brands);

  const [tag, setTag] = useState(null)
  const [category, setCategory] = useState(null)
  const [brand, setBrand] = useState(null)
  const [minPrice, setMinPrice] =useState(null)
  const [maxPrice, setMaxPrice] =useState(null)
  const [sort, setSort] = useState(null)


  useEffect(() => {
    let newBrands = []
    let category = []
    let tag = []
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      newBrands.push(element?.brand?.title)
      category.push(element?.category?.title)
      tag.push(element.tags)
    }
    setBrands(newBrands)
    setCategories(category)
    setTags(tag)
  }, [productState])

  console.log([...new Set(brands)], [...new Set(categories)], [...new Set(tags)])
  useEffect(() => {
    getProducts()
  }, [sort,tag,brand,category,minPrice,maxPrice])

  const getProducts = () => {
    dispatch(getAllProducts({sort,tag,brand,category,minPrice,maxPrice}))
  }
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
                    {
                      categories && [...new Set(categories)].map((item, index) => {
                        return (
                          <li key={index} onClick={() => { setCategory(item) }}>{item}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Product Brands
                </h3>
                <div className="text-capitalize product-tags d-flex flex-wrap align-items-center gap-10">
                  {
                    brands && [...new Set(brands)].map((item, index) => {
                      return (
                        <span onClick={() => setBrand(item)} key={index} className='badge bg-light text-secondary rounded-3 py-2 px-3'>{item}</span>
                      )
                    })
                  }
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
                      <input type="number" className="form-control" id="floatingInput" placeholder="From" onChange={(e) => setMinPrice(e.target.value)}/>
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="number" className="form-control" id="floatingInput1" placeholder="To" onChange={(e) => setMaxPrice(e.target.value)}/>
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  {/* <h5 className="sub-title">Colors</h5>
                  <div>
                    <Color />
                  </div> */}
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Product Tags
                </h3>
                <div className="text-capitalize product-tags d-flex flex-wrap align-items-center gap-10">
                  {
                    tags && [...new Set(tags)].map((item, index) => {
                      return (
                        <span onClick={() => setTag(item)} key={index} className='badge bg-light text-secondary rounded-3 py-2 px-3'>{item}</span>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{ "width": "100px" }}>Sort by</p>
                    <select name="" defaultValue='' className='form-control form-select' id="" onChange={(e)=>setSort(e.target.value)}>
                      <option value="title">A-Z</option>
                      <option value="-title">Z-A</option>
                      <option value="price">Low to high</option>
                      <option value="-price">High to low</option>
                      <option value="createAt">Old to new</option>
                      <option value="-createAt">New to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className="totalproducts mb-0">21 products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img onClick={() => { setGrid(3) }} src="/images/gr4.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={() => { setGrid(4) }} src="/images/gr3.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={() => { setGrid(6) }} src="/images/gr2.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={() => { setGrid(12) }} src="/images/gr.svg" className='d-block img-fluid' alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list mt-2">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard data={productState ? productState : []} grid={grid} />
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