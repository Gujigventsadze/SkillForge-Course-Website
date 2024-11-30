import "./Coursebox.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import clockImg from "../../assets/clock.png";

interface CourseBoxProps {
  img: string;
  title: string;
  duration: number;
  price: number;
  onClick: () => void;
  resMessage: string;
}

const CourseBox: React.FC<CourseBoxProps> = ({
  img,
  title,
  duration,
  price,
  onClick,
  resMessage,
}) => {
  return (
    <div className="coursebox-container">
      <div className="coursebox-img">
        <img src={img} />
      </div>
      <div className="coursebox-title">{title}</div>
      <div className="coursebox-lp">
        <div className="coursebox-length">
          <img src={clockImg} />
          <div>{duration} Months</div>
        </div>
        <div className="coursebox-price">${price.toFixed(2)}</div>
      </div>
      <div className="coursebox-btn">
        <PrimaryButton onClick={onClick}>Add to Cart</PrimaryButton>
      </div>
      <div>{resMessage} </div>
    </div>
  );
};

export default CourseBox;
