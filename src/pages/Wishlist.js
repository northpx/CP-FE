import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProductWishlist } from '../features/users/userSlice'
import { addToWishlist } from '../features/products/productSlice'

const Wishlist = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getWishlistFromDb()
    }, [])

    const getWishlistFromDb = () => {
        dispatch(getUserProductWishlist())
    }

    const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist)

    const removeFromWishlist = (id) =>{
        dispatch(addToWishlist(id))
        setTimeout(()=>{
            dispatch(getUserProductWishlist())
        },300)
    }
    return (
        <>
            <Meta title={"Wish List"}></Meta>
            <BreadCrumb title="Wish List" />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        {
                            wishlistState && wishlistState?.length === 0 && <div className='text-center fs-3'>No product favorite</div> 
                        }
                        {   wishlistState && 
                            wishlistState?.map((item, index) => {
                                return (
                                    <div className="col-3" key={index}>
                                        <div className="wishlist-card position-relative">
                                            <img onClick={()=>{
                                                removeFromWishlist(item?._id)
                                            }} src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                            <div className="wishlist-card-image">
                                                <img src="images/watch.jpg" alt="watch" className='img-fluid w-100' />
                                            </div>
                                            <div className='py-3'>
                                                <h5 className="title">{item?.title}</h5>
                                                <h6 className="price">$ {item?.price}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist