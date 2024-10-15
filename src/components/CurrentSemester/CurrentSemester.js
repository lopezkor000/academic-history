import { useEffect, useState } from "react";
import axios from "axios";
import CourseTab from "./Courses/CourseTab";

function CurrentSemester() {
  let [courses, setCourses] = useState({});

  useEffect(() => {
    (async () => {
      let result = await axios("http://localhost:8000/0");
      let semester = result.data.years["2024"].semesters["fall"];
      setCourses(semester.courses);
    })();
  }, []);

  let getCourses = () => {
    let coursesDiv = [];
    for (let [name, details] of Object.entries(courses)) {
      coursesDiv.push(<CourseTab key={name} name={name} details={details} />);
    }
    return coursesDiv;
  };

  return (
    <div className="row">
      <div className="col col-8">
        <div className="card bg-secondary-subtle">
          <div className="card-body">
            <div className="card-title h3 border-bottom border-secondary">
              Courses
            </div>
            {getCourses()}
          </div>
        </div>
      </div>
      <div className="col col-4 bg-primary">Summary</div>
    </div>
  );
}

export default CurrentSemester;
