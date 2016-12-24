import { SET_MENU } from "../actions";

export default function menu(state = [], action = {}) {
	switch(action.type) {
		case SET_MENU:
		return action.menu
		default: return state;
	}
}
