import Chevron from "../../resources/icons/Chevron";

function CurrentSemester() {
	let getCourses = () => {
		let courses = [];
		for (let i = 0; i < 3; i++) {
			courses.push(
				<div className="w-100 py-2">
					<button
						className="btn w-100"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target={`#collapse${i}`}
					>
						<div key={i} className="card-text row">
							<div className="col col-1">
								<Chevron />
							</div>
							<div className="col col-7">Algorithms & Data Structures {i}</div>
							<div className="col col-4">100%</div>
						</div>
					</button>
					<div className="collapse" id={`collapse${i}`}>
						<p>something hidden here!</p>
					</div>
				</div>
			);
		}
		return courses;
	};

	return (
		<div className="row">
			<div className="col col-8">
				<div className="card bg-secondary-subtle">
					<div className="card-body">
						<div className="card-title h3 border-bottom border-secondary">
							Courses
						</div>
						<div className="card-subtitle h5">
							<div className="row">
								<div className="col col-8">Name</div>
								<div className="col col-4">Grade</div>
							</div>
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
