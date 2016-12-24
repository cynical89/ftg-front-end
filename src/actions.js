export const SET_MENU = "SET_MENU";

export function setMenu(menu) {
	return {
		type: SET_MENU,
		menu
	}
}

export function fetchMenu() {
	return dispatch => {
		fetch("http://localhost:5000/api/items")
		.then(res => res.json())
		.then(data => dispatch(setMenu(data)));
	}
}
