import React, { createContext, useState } from 'react'
import all_product from "../Components/Assets/all_product"
export const ShopContext = createContext(null);

const getDeafaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0 ;
        
    }
    return cart ;
}
const ShopContextProvider = (props)=>{
   
    const [cartItem , setCartItems] = useState(getDeafaultCart());
const addToCart = (itemId)=> { 
    setCartItems((prev)=>({...prev , [itemId] : prev[itemId]+1 }))
}
const removeFromCart = (itemId)=> { 
    setCartItems((prev)=>({...prev , [itemId] : prev[itemId]-1 }))
}
const getTotalCartAmount = ()=>{
    let totalAmount = 0 ; 
    for(const item in cartItem){
        if(cartItem[item]>0)
            {
                let itemInfo = all_product.find((product)=>{
                   return product.id===Number(item)
                })
                
                totalAmount += itemInfo.new_price* cartItem[item];
            }
           
    }
    return totalAmount
}
const getTotalCartItems = ()=>{
    let totalItem = 0 ; 
    for(const item in cartItem){
        if(cartItem[item]>0){
            totalItem += cartItem[item];
        }
    }
    return totalItem;
}

const contextValue = {all_product , cartItem, addToCart , removeFromCart ,getTotalCartAmount , getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;