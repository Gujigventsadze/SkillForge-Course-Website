import "./CartTotal.css";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import { useCart } from "../../Context/CartContext";

const CartTotal = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="carttotal-container">
      <div className="total-course-list">
        <div className="course-titles">Items</div>
        <div className="course-list">
          {cart.map((item) => (
            <div key={item.id}>{item.title} | </div>
          ))}
        </div>
      </div>
      <div className="total-courses">
        <div>Courses Price</div>
        <div>${totalPrice.toFixed(2)}</div>
      </div>
      <div className="total-tax">
        <div>Tax</div>
        <div>2%</div>
      </div>
      <div className="total-amount">
        <div>Total Amount</div>
        <div>${(totalPrice * 1.02).toFixed(2)}</div>
      </div>
      <div className="checkout-btn">
        <CheckoutButton>Checkout</CheckoutButton>
      </div>
    </div>
  );
};

export default CartTotal;
