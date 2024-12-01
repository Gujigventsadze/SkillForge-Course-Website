import "./CartItem.css";
import time from "../../assets/clock.png";
import trash from "../../assets/trash-can.png";

interface CartItemProps {
  img: string;
  title: string;
  duration: number;
  price: number;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  img,
  title,
  duration,
  price,
  onRemove,
}) => {
  return (
    <div className="cartitem-container">
      <div className="cartitem-left">
        <img src={img} />
      </div>
      <div className="cartitem-right">
        <div className="cartitem-title">{title}</div>
        <div className="cartitem-length">
          <img src={time} />
          <div>{duration} Months</div>
        </div>
        <div className="cartitem-price">${price.toFixed(2)}</div>
      </div>
      <div className="trash-can" onClick={onRemove}>
        <img src={trash} />
      </div>
    </div>
  );
};

export default CartItem;
