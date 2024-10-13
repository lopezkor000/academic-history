function CurrentSemester() {
	return (
		<div className="row">
			<div className="col col-8 ">
				<div className="card bg-secondary-subtle">
					<div className="card-body">
						<div className="card-title h3">Courses</div>
						<div className="card-subtitle h5">
							<div className="row">
								<div className="col col-8">Name</div>
								<div className="col col-4">Grade</div>
							</div>
						</div>
						<div className="card-text row">
							<div className="col col-8">Algorithms & Data Structures</div>
							<div className="col col-4">100%</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col col-4 bg-primary">Summary</div>
		</div>
	);
}

export default CurrentSemester;
