import { useContext } from "react";
import { CartProps } from "./App";
function ButtonAddToCart() {
  const cartProps = useContext(CartProps);
  return (
    <button
      className="add-to-cart"
      onClick={() => {
        cartProps.setCount(cartProps.cartCount + 1);
      }}
    >
      В корзину
    </button>
  );
}
export default ButtonAddToCart;
