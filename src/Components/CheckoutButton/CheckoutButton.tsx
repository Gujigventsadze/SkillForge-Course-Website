import { ReactNode } from "react";
import "../PrimaryButton/PrimaryButton.css";

interface CheckoutBtnProps {
  children: ReactNode;
}

const CheckoutButton: React.FC<CheckoutBtnProps> = ({ children }) => {
  return <button id="checkout-btn">{children}</button>;
};

export default CheckoutButton;
