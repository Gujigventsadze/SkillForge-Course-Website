import Description from "../Components/CoursePageDesc/Description";
import { useParams } from "react-router-dom";
import { Data } from "../Context/CourseData";

const Coursepage = () => {
  const { courseName } = useParams<{ courseName: string }>();

  const course = Data.find(
    (c) => c.title.toLowerCase() === courseName!.toLowerCase()
  );

  if (!course) {
    return <div>No Course Found</div>;
  }

  return (
    <Description
      title={course.title}
      description={course.description}
      img={course.img}
      price={course.price}
      duration={course.duration}
      id={course.id}
      popular={course.popular}
    />
  );
};

export default Coursepage;
