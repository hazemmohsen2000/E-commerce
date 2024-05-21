import React from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
const ProductDisplay = ({product}) => {
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productsiplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="star icon 1" />
                <img src={star_icon} alt="star icon 2" />
                <img src={star_icon} alt="star icon 3" />
                <img src={star_icon} alt="star icon 4" />
                <img src={star_dull_icon} alt="star icon 5" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Elevate your everyday wardrobe with our Classic Fit Cotton T-Shirt,
             a timeless staple designed for both comfort and style.
              Crafted from 100% premium cotton, this t-shirt offers a soft,
               breathable feel that keeps you cool and comfortable all day long
            </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category : </span>
                Woman , T-shirt, Crop Top
                </p>
                <p className="productdisplay-right-category"><span>Tags : </span>
                Modern, Latest
                </p>
        </div>
    </div>
  )
}
export default ProductDisplay