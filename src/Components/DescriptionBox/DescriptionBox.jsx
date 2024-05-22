import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to ShopEase, your one-stop online shopping
                destination designed to provide a seamless and 
                enjoyable shopping experience. Whether you're
                looking for the latest fashion trends, cutting-edge
                electronics, or everyday essentials, ShopEase has it all.
                Our platform offers a wide variety of products,
                ensuring you find exactly what you need with just a few clicks
            </p>
            <p>
                At ShopEase, we are committed to providing a top-notch shopping experience
                that combines convenience, variety, and security. Our goal is to make
                online shopping enjoyable and effortless, ensuring you find exactly what
                you need with the best service possible. 
            </p>
        </div>
    </div>
  ) 
}
export default DescriptionBox