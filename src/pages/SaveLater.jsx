import { Productcard } from "../components/productcard/productcard"
import { useCart } from "../context/cart-context"

export const SaveLater = ()=>{
 const {cartState:{saveLater}}=useCart()
    return(
        <div>
            {saveLater.length>0?
            <div className="product_wrapper">
                {saveLater?.map((product)=>
                <Productcard product={product} key={product.id}/>)}
            </div>:
            <h3>No Items In save Later</h3>}
        </div>
    )
}