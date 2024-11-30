import { ReactNode } from "react";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
  children: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return <button id="primary-btn">{children}</button>;
};

export default PrimaryButton;
