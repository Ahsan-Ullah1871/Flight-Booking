import { BOOK, CANCEL_BOOK } from "./actionTypes";

export const book_seat = (data) => {
	return { type: BOOK, payload: data };
};

export const cancel_book = (data) => {
	return { type: CANCEL_BOOK, payload: data };
};
