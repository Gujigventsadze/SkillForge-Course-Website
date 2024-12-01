import CartItem from "../Components/CartItem/CartItem";
import CartTotal from "../Components/CartTotal/CartTotal";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="main-cart-container">
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              price={item.price}
              duration={item.duration}
              img={item.img}
              onRemove={() => removeFromCart(item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-items">No Items In Cart</div>
      )}
      <div>
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;
