import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import { getAProduct } from '../features/products/productSlice';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authState = useSelector((state) => state?.auth)
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const productState = useSelector((state) => state?.product?.product);
  const [productOpt, setProductOpt] = useState([])
  const [totalAmount, setTotalAmount] = useState(null)
  const [paginate, setPaginate] = useState(true);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState?.length; i++) {
      sum = sum + (Number(cartState[i].quantity) * Number(cartState[i].price))
      setTotalAmount(sum)
    }
  }, [cartState])

  useEffect(()=>{
    let data = []
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      data.push({id: index, prod: element?._id, name:element?.title})
    }
    setProductOpt(data)
  }, [productState])

  const handlerLogout = () => {
    localStorage.clear();
    window.location.reload()
  }

  return (
    <>
      <header className="header-upper py-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className='text-white' to='/'>Digitic.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                {/* <input type="text" className="form-control py-2" placeholder="Search product here..." aria-label="Search product here..." aria-describedby="basic-addon2" /> */}
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log('Results paginated')}
                  onChange={(selected) =>{
                    navigate(`/product/${selected[0]?.prod}`)
                    dispatch(getAProduct(selected[0]?.prod))
                  }}
                  options={productOpt}
                  paginate={paginate}
                  labelKey={"name"}
                  minLength={2}
                  placeholder="Search product ..."
                />
                <span className="input-group-text px-3 py-2" id="basic-addon2"><BsSearch className='fs-6' /></span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/compare.svg" alt="compare" />
                    <p className='mb-0'>
                      Compare <br />
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/wishlist.svg" alt="compare" />
                    <p className='mb-0'>
                      Favorite <br />
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to={authState?.user === null ? '/login' : '/profile'} className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/user.svg" alt="user" />
                    {
                      authState && authState?.user === null ? <p className='mb-0'>
                        Log in <br />
                      </p> : <p className='mb-0'>
                        Welcome, &nbsp; <br /> {authState?.user?.firstname}
                      </p>
                    }
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className='badge bg-white text-dark'>{cartState?.length ? cartState?.length : 0}</span>
                      <p className='mb-0'>$ {totalAmount ? totalAmount : 0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/images/menu.svg" alt="" />
                    <span className='me-2 d-inline-block'>Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                  </ul>
                </div>
              </div>
              <div className='menu-links d-flex align-items-center justify-content-between flex-grow-1'>
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/product">Our Store</NavLink>
                  <NavLink to="/order">Order</NavLink>
                  <NavLink to="/blog">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
                <button onClick={handlerLogout} className='border border-0 bg-transparent text-white'>Log out</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header