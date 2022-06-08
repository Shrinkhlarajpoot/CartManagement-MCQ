import { Productcard } from "../components/productcard/productcard"
import { useCart } from "../context/cart-context";
import { products } from "../data"
import "./styles.css";


export const Products = ()=>{
 const {cartDispatch,cartState} =useCart();
 return (
        <div className="product_wrapper">
           {products?.map((product)=>
          <Productcard product={product} key={product.id}/>)}
            
        </div>
    )
}