import Intro from "../Components/IntroSection/Intro";
import CourseBox from "../Components/CourseBox/CourseBox";
import { Data } from "../Context/CourseData";
import { useCart } from "../Context/CartContext";
import { DataType } from "../Context/CourseData";
import { useState } from "react";

const Homepage = () => {
  const [resMessages, setResMessages] = useState<{ [key: number]: string }>({});
  const { addToCart } = useCart();

  const handleAddToCart = (item: DataType) => {
    const course = {
      id: item.id,
      title: item.title,
      duration: item.duration,
      price: item.price,
      img: item.img,
      description: item.description,
      popular: item.popular,
    };
    const res = addToCart(course);

    setResMessages((prev) => ({
      ...prev,
      [item.id]: res,
    }));

    setTimeout(() => {
      setResMessages((prev) => {
        const newMessages = { ...prev };
        delete newMessages[item.id];
        return newMessages;
      });
    }, 2000);
  };

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
        {Data.map((course) => (
          <CourseBox
            key={course.id}
            title={course.title}
            price={course.price}
            duration={course.duration}
            img={course.img}
            onClick={(e) => {
              e!.stopPropagation();
              handleAddToCart(course);
            }}
            resMessage={resMessages[course.id]}
            redirectPath={`/course-page/${course.title}`}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
