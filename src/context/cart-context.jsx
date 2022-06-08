import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const useCart = ()=>useContext(CartContext);
const reducerFun = (state,{payload,type})=>{
    switch(type){
        case "ADD_TO_CART":
            const ItemtoAdd = payload
            const newItem = {...ItemtoAdd,quantity:1}
            return {...state,cartProducts:[...state.cartProducts,newItem]}
        case "REMOVE_FROM_CART":
            let removedProduct= state.cartProducts.find((item)=>item.id===payload.id);
            return {...state,cartProducts:state.cartProducts.filter((item)=>item.id!==payload.id)}
        case "ADD_TO_SAVELATER":
            let saveLaterProduct= state.cartProducts.find((item)=>item.id===payload.id);
            return {...state,cartProducts:state.cartProducts.filter((item)=>item.id!==payload.id),saveLater:[...state.saveLater,payload]}
        case "REMOVE_FROM_SAVELATER":
            return {...state, saveLater:state.saveLater.filter((item)=>item.id!==payload.id)}
        case "INCREASE_QUANTITY":
            let itemQuantity =state.cartProducts.find((item)=>item.id===payload.id)
            let editItem = {...itemQuantity,quantity:itemQuantity.quantity+1}
            return {...state,cartProducts:state.cartProducts.map((item)=>item.id===payload.id?editItem:item)}
        
        case "DECREASE_QUANTITY":
            let itemQuantity1 =state.cartProducts.find((item)=>item.id===payload.id)
            let editItem1 = {...itemQuantity1,quantity:itemQuantity1.quantity-1}
            return {...state,cartProducts:state.cartProducts.map((item)=>item.id===payload.id?editItem1:item)}
        default:
            return state
        }
    }

const CartProvider = ({children})=>{

 const [cartState,cartDispatch]=useReducer(reducerFun,{
        cartProducts:[],
        saveLater:[],
    })
    return (
        <div>
            <CartContext.Provider value={{cartState,cartDispatch}}>{children}</CartContext.Provider>
        </div>
    )
}
export {useCart,CartProvider}