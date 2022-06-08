import { useCart } from "../../context/cart-context"

export const  Cartcard = ({product})=>{
 const {cartDispatch} = useCart();
 console.log(cartDispatch,"hahahahahaha")
    return(

        <div>
       
          <div className="card__vertical card" key={product?._id}>
           
              <i
                className=
             
                     "fa fa-clock card__like"
                   
                
                role="button"
                onClick={()=>
                cartDispatch({
                    type:"ADD_TO_SAVELATER",
                    payload:product
                })}
              ></i>
         
  
          
         
  
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
                <div className="quantity_info">
                    <button onClick={()=>{
                        if(product.quantity===1){
                        cartDispatch({
                            type:"REMOVE_FROM_CART",
                            payload:product
                        })
                        }
                    else{
                    cartDispatch({
                        type:"DECREASE_QUANTITY",
                        payload:product
                    })}
                }}>-</button>{product.quantity}<button onClick={()=>
                        cartDispatch({
                            type:"INCREASE_QUANTITY",
                            payload:product
                        })} >+</button>
                </div>
                <button
                  className="btn__pri btn"
                 style={{ marginTop: "1.2rem" }}
                 onClick={()=>
                    cartDispatch({
                        type:"REMOVE_FROM_CART",
                        payload:product
                    })
                }
                 
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
          </div>
    )
}