import Chevron from "../../../resources/icons/Chevron";
import { useState } from "react";

function CourseTab(props) {
	let [open, setOpen] = useState(true);

	return (
		<div className="py-2">
			<button
				className="btn w-100"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target={`#${props.name}`}
				onClick={() => {
					setOpen(!open);
					console.log(open);
				}}
			>
				<div className="card-text row">
					<div className="col col-1">
						<Chevron open={open} />
					</div>
					<div className="col col-7">{props.name}</div>
					<div className="col col-4">{props.details.grade}%</div>
				</div>
			</button>
			<div className="collapse text-start ps-5 ms-5" id={`${props.name}`}>
				<p>{props.details.name}</p>
			</div>
		</div>
	);
}

export default CourseTab;
