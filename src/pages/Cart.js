import React,{useContext, useState} from "react";
import { Context } from "../component/Context";
import CartItem from "../component/CartItem";



function Cart() {

    const {addToCart, emptyCartItem} = useContext(Context)
    const [buttontext, setButtonText] = useState("Place Order")
    const [checkOut, setCheckOut] = useState(<h1>Cart Here</h1>)

    const totalCost = 5.99 * addToCart.length
    const displayCartItem = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

     function changeText (){
        setButtonText(prevtext => "Ordering")
        
        setTimeout(() => {
            setButtonText(prevtext => "Order has been Placed")
            emptyCartItem()
            setCheckOut(<h1>Order Placed</h1>)
        }, 3000);
         console.log("order placed")


     }

    const cartElement = addToCart.map(item => (
        <CartItem key={item.id}  item = {item} />
    ))
    return (
        

        <div className="cart-page" >
            
             {checkOut}
             {cartElement}
             <p className="total-cost price">Total: {displayCartItem} </p>
             { addToCart.length >=1 ? 
            <div className="order-button">
              <button onClick={changeText} > {buttontext} </button> 
            </div> : <h3 className="trash" >You dont have any item in the cart</h3> }
        </div>
        
    )
    
}

export default Cart