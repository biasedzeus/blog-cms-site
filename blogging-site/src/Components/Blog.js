import React from 'react'

export default function Blog({title,subheading,src}) {
    return (
        <div className= "">
            <div class="img-container">
                <img className="blog-image" src={src} alt="blog-image"/>
            </div>
            <div className="blogheading">
                {title}

            </div>
            <div class="sub-heading">
                {subheading}
            </div>

            
        </div>
    )
}
