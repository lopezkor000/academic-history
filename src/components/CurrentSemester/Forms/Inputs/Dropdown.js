function Dropdown(props) {
	function addItems() {
		let items = [];
		for (let item of props.items) {
			items.push(
				<li
					className="dropdown-item"
					onClick={() => {
						document.getElementById("form-type").innerText =
							document.getElementById(item).innerText;
					}}
					id={item}
				>
					{item}
				</li>
			);
		}
		return items;
	}

	return (
		<div className="dropdown">
			<button
				className="btn btn-primary dropdown-toggle w-25"
				data-bs-toggle={"dropdown"}
				id="form-type"
			>
				Select Something
			</button>
			<ul className="dropdown-menu">{addItems()}</ul>
		</div>
	);
}

export default Dropdown;
