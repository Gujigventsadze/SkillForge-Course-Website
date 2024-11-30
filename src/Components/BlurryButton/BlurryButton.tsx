import { ReactNode } from "react";
import "../PrimaryButton/PrimaryButton.css";

interface BlurryButtonProps {
  children: ReactNode;
}

const BlurryButton: React.FC<BlurryButtonProps> = ({ children }) => {
  return <button id="blurry-btn">{children}</button>;
};

export default BlurryButton;
