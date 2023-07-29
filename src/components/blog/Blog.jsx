import React from 'react'

function Blog({ date, heading, link, src }) {
    return (
        <div className='blog'>
            <div className="blog-img">
                <img src={src} alt="blog image" />
            </div>
            <div className="blog-text">
                <div className="date-heading">
                    <p>{date}</p>
                    <h1>{heading}</h1>
                </div>
                <div className="link">
                    <p>{link}</p>
                </div>
            </div>
        </div>
    )
}

export default Blog

