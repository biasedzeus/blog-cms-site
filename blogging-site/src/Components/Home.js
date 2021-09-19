import React from 'react'
import Blog from './Blog.js'


const src = "https://media.istockphoto.com/photos/abstract-background-picture-id1300035693?b=1&k=20&m=1300035693&s=170667a&w=0&h=oucuXUNoVevwffGNiymXGX4YVTmqdyRa8WjxMSAsWPA="

export default function Home() {
    
    return (
        <div className ="blog-container">
            <Blog src={src} 
            title ="What Nature has to Offer" 
            subheading="Mountains are awesome "
            />
           <Blog src={src} 
            title ="What Nature has to Offer" 
            subheading="Mountains are awesome "
            />
            <Blog src={src} 
            title ="What Nature has to Offer" 
            subheading="Mountains are awesome "
            />
            
        </div>
    )
}
