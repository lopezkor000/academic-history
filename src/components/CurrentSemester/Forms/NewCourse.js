import Dropdown from "./Inputs/Dropdown";

function NewCourse() {
	return (
		<div
			className="offcanvas offcanvas-start w-50 container text-center"
			tabIndex={"-1"}
			id={"newcourse"}
		>
			<div className="offcanvas-header row">
				<h3 className="col">Edit Courses</h3>
				<button
					className="btn-close position-absolute end-0 top-0 p-5 shadow-none"
					data-bs-dismiss={"offcanvas"}
				/>
			</div>
			<div className="offcanvas-body row">
				<Dropdown items={["item-1", "item-2", "item-3"]} />
			</div>
		</div>
	);
}

export default NewCourse;
