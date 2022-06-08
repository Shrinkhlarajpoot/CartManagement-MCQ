import { Link } from "react-router-dom"
import { useCart } from "../../context/cart-context"
import "./Header.css"

export const Header = ()=>{
   const {cartState:{cartProducts,saveLater}}=useCart()
    return(
        <div className="header_wrapper">
        <h2>FlipCart</h2>
        <input type="text" placeholder="Search Items.." className="search"/>
        <div className="links">
            <Link to="/">Explore Products</Link>
            <Link to="/cart">{`Cart ${cartProducts.length>=1?cartProducts.length:""}`}</Link>
            {saveLater.length>0 &&<Link to="/savelater" >{`Saved Items- ${saveLater.length}`}</Link>}
        </div>

        </div>
    )
}