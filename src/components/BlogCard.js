import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = () => {
  return (
    <>
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">
                    1 Dec, 2022
                </p>
                <h5 className="title">
                    A beautiful Sunday morning renaissance
                </h5>
                <p className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore quisquam corporis debitis hic pariatur nobis maiores tenetur voluptatem
                </p>
                <Link className='button' to='/blog/:id'>Read More</Link>
            </div>
        </div>
    </>
  )
}

export default BlogCard