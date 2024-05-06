import { BOOK, CANCEL_BOOK } from "./actionTypes";

const initial_state = {
	booking_lists: [],
};

const bookingReducer = (state = initial_state, action) => {
	switch (action.type) {
		case BOOK:
			return {
				...state,
				booking_lists: [
					...state.booking_lists,
					{
						id: action.payload.id,
						destination_from:
							action.payload
								.destination_from,
						destination_to:
							action.payload.destination_to,
						date: action.payload.date,
						person: action.payload.person,
						class: action.payload.class,
					},
				],
			};
		case CANCEL_BOOK:
			return {
				...state,
				booking_lists: [
					...state.booking_lists.filter(
						(list) =>
							action.payload.id !== list.id
					),
				],
			};

		default:
			return state;
	}
};

export default bookingReducer;
