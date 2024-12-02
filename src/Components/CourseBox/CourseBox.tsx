import "./Coursebox.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import clockImg from "../../assets/clock.png";
import { useNavigate } from "react-router-dom";

interface CourseBoxProps {
  img: string;
  title: string;
  duration: number;
  price: number;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  resMessage: string;
  redirectPath: string;
}

const CourseBox: React.FC<CourseBoxProps> = ({
  img,
  title,
  duration,
  price,
  onClick,
  resMessage,
  redirectPath,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(redirectPath);
  };

  return (
    <div className="coursebox-container" onClick={handleNavigate}>
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
