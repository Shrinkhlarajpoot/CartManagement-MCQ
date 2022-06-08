import { Navigate, useNavigate } from "react-router-dom";
import { CartReceipt } from "../components/cart-receipt";
import { Cartcard } from "../components/cartcard/cartcard";
import { Productcard } from "../components/productcard/productcard";
import { useCart } from "../context/cart-context"
import { products } from "../data";

export const Cart = ()=>{
 const navigate =    useNavigate();
 const {cartState:{cartProducts,saveLater}}= useCart();

    return(
       
        
    
      <div> {cartProducts.length>0 ?
       <div className="cart_container">
        <div className="product_wrapper">
            {cartProducts?.map((product)=>
            <Cartcard product={product} key={product.id}/>)}
        </div>
         <div> {cartProducts.length>0 && <CartReceipt/>}</div></div>
        
        :<h1>No Products Added</h1>}</div>
     
    
      
    )
}