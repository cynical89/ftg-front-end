import React from "react";

export default function Menu({ menu }) {
	const emptyMessage = (
		<p>There are no items on the menu yet</p>
	);

	const menuItems = (
		menu.map((item, key) => {
			return <li key={key}>{item.value.name} - ${item.value.price/100}</li>
		})
	);

	return (
		<div>
			{ menu.length === 0 ? emptyMessage : menuItems }
		</div>
	);
}

Menu.propTypes = {
	menu: React.PropTypes.array.isRequired
}
