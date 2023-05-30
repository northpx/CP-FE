import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import {BiLeftArrowAlt} from 'react-icons/bi'
const SingleBlog = () => {
    return (
        <>
            <Meta title={"Blog"}></Meta>
            <BreadCrumb title="Blog" />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                            <Link to='/blog' className='d-flex align-items-center gap-15'><BiLeftArrowAlt className='fs-5'></BiLeftArrowAlt>Go back to Blogs</Link>
                                <h3 className='title'>A beautiful Sunday morning renaissance</h3>
                                <img src="/images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium recusandae impedit, obcaecati ipsum iure unde earum vitae? Officiis ad enim ut nihil quod illo consequatur, nisi aspernatur ipsa, hic libero!LoremLorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium recusandae impedit, obcaecati ipsum iure unde earum vitae? Officiis ad enim ut nihil quod illo consequatur, nisi aspernatur ipsa, hic libero!Lorem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog