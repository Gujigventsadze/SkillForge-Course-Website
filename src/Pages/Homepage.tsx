import Intro from "../Components/IntroSection/Intro";
import CourseBox from "../Components/CourseBox/CourseBox";
import reactImg from "../assets/React.png";

const Homepage = () => {
  return (
    <>
      <Intro />
      <div
        style={{
          textAlign: "center",
          fontSize: "4rem",
          fontFamily: "Orbitron",
          marginTop: "5rem",
        }}
      >
        Popular Courses
      </div>
      <div className="coursebox-grid">
        <CourseBox title="React" duration={6} img={reactImg} price={299} />
        <CourseBox title="React" duration={6} img={reactImg} price={299} />
        <CourseBox title="React" duration={6} img={reactImg} price={299} />
        <CourseBox title="React" duration={6} img={reactImg} price={299} />
        <CourseBox title="React" duration={6} img={reactImg} price={299} />
      </div>
    </>
  );
};

export default Homepage;
