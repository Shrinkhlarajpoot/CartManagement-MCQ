import { Productcard } from "../components/productcard/productcard";
import { products } from "../data";
import "./styles.css";

export const Products = () => {
  return (
    <div className="product_wrapper">
      {products?.map((product) => (
        <Productcard product={product} key={product.id} />
      ))}
    </div>
  );
};
