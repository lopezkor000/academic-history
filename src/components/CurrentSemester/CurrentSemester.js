import { useEffect, useState } from "react";
import axios from "axios";
import CourseTab from "./Courses/CourseTab";
import NewCourse from "./Forms/NewCourse";

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
		<>
			<div className="row">
				<div className="col">
					<div className="card bg-secondary-subtle">
						<div className="card-body">
							<div className="card-title border-bottom border-secondary row">
								<h3 className="text-center col">Fall '24 Courses</h3>
								<button
									className="btn btn-primary position-absolute end-0 bottom-10 w-auto me-3"
									data-bs-toggle={"offcanvas"}
									data-bs-target={"#newcourse"}
								>
									+
								</button>
							</div>
							{getCourses()}
						</div>
					</div>
				</div>
				{/* <div className="col col-4 bg-primary">Summary</div> */}
			</div>
			<NewCourse />
		</>
	);
}

export default CurrentSemester;
