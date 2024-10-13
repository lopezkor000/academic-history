function TopBar() {
	return (
		<>
			<div className="row pt-2">
				<h1>Grade Calculator</h1>
			</div>
			<div className="row py-3">
				<div className="btn-group" role="group">
					{/* <button type="button" className="btn btn-primary">
						Dashboard
					</button> */}
					<button type="button" className="btn btn-primary border">
						Current Semester
					</button>
					<button type="button" className="btn btn-primary border">
						Academic History
					</button>
				</div>
			</div>
		</>
	);
}

export default TopBar;
