import BlurryButton from "../BlurryButton/BlurryButton";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-left">
        <div>Turn Journey Into</div>
        <div>Your Professional</div>
        <div>Mastery</div>
      </div>
      <BlurryButton>Learn More</BlurryButton>
    </div>
  );
};

export default Intro;
