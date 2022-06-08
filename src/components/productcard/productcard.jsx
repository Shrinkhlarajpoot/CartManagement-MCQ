import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context"

export const  Productcard = ({product})=>{
 const {cartState,cartDispatch} = useCart();
 const navigate = useNavigate();
  const AlreadyInCart = cartState?.cartProducts?.find((item)=>item.id===product.id);
  console.log(AlreadyInCart)

    return(

        <div>
       
          <div className="card__vertical card" key={product?._id}>
           
              
          
         
  
            <div className="card__vertical-maincontent">
              <div className="card__vertical-img">
                <img
                 src={product?.image}
                  alt={product?.title}
                
                 
                />
              </div>
              <div
                className="card__vertical-content"
                style={{ margin: "1px 1px" }}
              >
                <div>{product?.title?.toUpperCase()}</div>
                <div style={{fontSize:"1.2rem"}}>{product?.categoryName?.toUpperCase()}</div>
                
                <div style={{fontWeight:"bold"}}>
                  MRP :<i className="fas fa-rupee-sign"></i>
                  {product?.price}
                </div>
                
                <button
                  className="btn__pri btn"
                 style={{ marginTop: "1.2rem" }}
                 onClick={()=>
                    AlreadyInCart?
                    navigate("/cart"):
                    (
                    cartDispatch({
                        type:"ADD_TO_CART",
                        payload:product
                    }),
                    cartDispatch({
                        type:"REMOVE_FROM_SAVELATER",
                        payload:product
                   })
                    
                    )
                   
                }
                 
                >
                {AlreadyInCart?"View In Cart":"Add to Cart"}
                </button>
              </div>
            </div>
          </div>
          </div>
    )
}