import { ReactNode } from "react";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} id="primary-btn">
      {children}
    </button>
  );
};

export default PrimaryButton;
