import { useCart } from "../context/cart-context"

export const CartReceipt = ()=>{
   const {cartState:{cartProducts}}=useCart();
   const totalPrice = cartProducts.reduce(((accum,init)=>accum+init.quantity*init.price),0)
   console.log(totalPrice)
    return(
        <div className="cart_receipt">
            <h4>Payment Details</h4>
            <div>
                <h6>Total Products</h6>
                <div>
                    {cartProducts?.map((item)=>
                    <div>{` ${item.title} - Rs:${item.price}`}</div>)}
                </div>
                <div>
                    <h6>{`Total Price - Rs-${totalPrice.toFixed(2)}`}</h6>
                </div>
                <div>
                    <h5>Discount (10%)</h5>
                    <div>{` Dicount - Rs-${(totalPrice*10/100).toFixed(2)} `}</div>
                    
                </div>
                <div>Total Payment</div>
                <div>{` Total Price  - Rs-${(totalPrice-(totalPrice*10/100)).toFixed(2)}`}</div>
            </div>

        </div>
    )
}