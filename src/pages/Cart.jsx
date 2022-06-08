import { CartReceipt } from "../components/cart-receipt";
import { Cartcard } from "../components/cartcard/cartcard";

import { useCart } from "../context/cart-context";

export const Cart = () => {
  const {
    cartState: { cartProducts },
  } = useCart();

  return (
    <div>
      {" "}
      {cartProducts.length > 0 ? (
        <div className="cart_container">
          <div className="product_wrapper">
            {cartProducts?.map((product) => (
              <Cartcard product={product} key={product.id} />
            ))}
          </div>
          <div> {cartProducts.length > 0 && <CartReceipt />}</div>
        </div>
      ) : (
        <h1>No Products Added</h1>
      )}
    </div>
  );
};
