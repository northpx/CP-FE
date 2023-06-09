import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link,  useLocation } from 'react-router-dom'
import {BiLeftArrowAlt} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { getABlog } from '../features/blogs/blogSlice'

const SingleBlog = () => {
    const blogState = useSelector((state) => state?.blog?.singleBlog)
    const location = useLocation()
    const getBlogId = location.pathname.split("/")[2]
    const dispatch = useDispatch();
    useEffect(() => {
        getBlog()
    }, [])

    const getBlog = () => {
        dispatch(getABlog(getBlogId))
    }
    return (
        <>
            <Meta title={blogState?.title}></Meta>
            <BreadCrumb title={blogState?.title} />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                            <Link to='/blog' className='d-flex align-items-center gap-15'><BiLeftArrowAlt className='fs-5'></BiLeftArrowAlt>Go back to Blogs</Link>
                                <h3 className='title'>{blogState?.title}</h3>
                                <img src={blogState?.image[0]?.url ? blogState?.image[0]?.url : "/images/blog-1.jpg"} className='img-fluid w-100 my-4' alt="blog" />
                                <p>{blogState?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog