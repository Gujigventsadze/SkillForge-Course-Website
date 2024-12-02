import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

interface DescriptionProps {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  popular: boolean;
}

const Description: React.FC<DescriptionProps> = ({
  img,
  title,
  description,
  price,
  duration,
  popular,
  id,
}) => {
  const { addToCart } = useCart();

  const [resMessage, setResMessages] = useState<string>("");

  const handleAddtoCart = () => {
    const course = {
      id,
      title,
      description,
      price,
      duration,
      popular,
      img,
    };

    setResMessages(addToCart(course));
    setTimeout(() => {
      setResMessages("");
    }, 2000);
  };

  return (
    <div className="course-page-container">
      <div className="course-page-pic">
        <img src={img} />
      </div>
      <div className="course-page-title">{title}</div>
      <div className="course-page-description">{description}</div>
      <div className="course-page-pb">
        <div>${price.toFixed(2)}</div>
        <div>
          <PrimaryButton onClick={handleAddtoCart}>Add to Cart</PrimaryButton>
        </div>
      </div>
      <div>{resMessage}</div>
    </div>
  );
};

export default Description;
