import { Data, DataType } from "../Context/CourseData";
import CourseBox from "../Components/CourseBox/CourseBox";
import { useCart } from "../Context/CartContext";
import { useState } from "react";

const Courses = () => {
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
      <div
        style={{
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: "3rem",
          fontWeight: 500,
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        All Courses
      </div>
      <div className="all-courses-grid">
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

export default Courses;
