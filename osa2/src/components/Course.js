import React from "react";




const Course = ({ course }) => {

  const Header = ({ header }) => {
    return <h1>{header}</h1>;
  };
  
  const courseContent = () =>
    course.parts.map(part => (
      <ul key={part.id}>
        {part.name} {part.exercises}
      </ul>
    ));

  const reducer = (sum, part) => {
    return sum + part.exercises;
  };

  const total = course.parts.reduce(reducer, 0);

  return (
    <div>
      <ul>
        <Header header={course.name} />
        {courseContent()}
        Yhteensä {total} tehtävää
      </ul>
    </div>
  );
};

export default Course