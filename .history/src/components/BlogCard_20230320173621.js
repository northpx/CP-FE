import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid' alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">

                </p>
                <h5 className="title">
                    A beautiful Sunday morning renaiss
                </h5>
                <p className="desc">

                </p>
                <Link className='button'>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard