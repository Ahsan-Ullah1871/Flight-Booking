import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { book_seat } from "../redux/Booking/actions";

const BookingForm = () => {
	const dispatch = useDispatch();
	const booking_list = useSelector((state) => state.booking_lists);

	const [booking_state, setBooking_state] = useState({});

	//
	const handle_change = (key_name, e) => {
		setBooking_state((prevState) => ({
			...prevState,
			[key_name]: e.target.value,
		}));
	};

	// form submit
	const form_submit = (e) => {
		e.preventDefault();
		dispatch(
			book_seat({
				...booking_state,
				id:
					booking_list.length > 0
						? booking_list[
								booking_list.length - 1
						  ].id + 1
						: 1,
			})
		);
	};

	return (
		<div class="mt-[160px] mx-4 md:mt-[160px] relative">
			<div class="bg-white rounded-md max-w-6xl w-full mx-auto">
				<form
					class="first-hero techlab-inputform"
					onSubmit={form_submit}
				>
					{/*  From */}
					<div class="des-from">
						<p>Destination From</p>
						<div class="flex flex-row">
							<img
								src="./img/icons/Frame.svg"
								alt=""
							/>
							<select
								class="outline-none px-2 py-2 w-full"
								name="from"
								id="techlab-from"
								required
								onChange={(e) =>
									handle_change(
										"destination_from",
										e
									)
								}
							>
								<option
									value=""
									hidden
								>
									Please Select
								</option>
								<option value="Dhaka">
									Dhaka
								</option>
								<option value="Sylhet">
									Sylhet
								</option>
								<option value="Saidpur">
									Saidpur
								</option>
								<option value="Cox's Bazar">
									Cox's Bazar
								</option>
							</select>
						</div>
					</div>

					{/*  To */}
					<div class="des-from">
						<p>Destination To</p>
						<div class="flex flex-row">
							<img
								src="./img/icons/Frame.svg"
								alt=""
							/>
							<select
								class="outline-none px-2 py-2 w-full"
								name="to"
								id="techlab-to"
								onChange={(e) =>
									handle_change(
										"destination_to",
										e
									)
								}
								required
							>
								<option
									value=""
									hidden
								>
									Please Select
								</option>
								<option value="Dhaka">
									Dhaka
								</option>
								<option value="Sylhet">
									Sylhet
								</option>
								<option value="Saidpur">
									Saidpur
								</option>
								<option value="Cox's Bazar">
									Cox's Bazar
								</option>
							</select>
						</div>
					</div>

					{/*  Date */}
					<div class="des-from">
						<p>Journey Date</p>
						<input
							type="date"
							class="outline-none px-2 py-2 w-full date"
							name="date"
							id="techlab-date"
							onChange={(e) =>
								handle_change("date", e)
							}
							required
						/>
					</div>

					{/*  Guests */}
					<div class="des-from">
						<p>Guests</p>
						<div class="flex flex-row">
							<img
								src="./img/icons/Vector (1).svg"
								alt=""
							/>
							<select
								class="outline-none px-2 py-2 w-full"
								name="guests"
								id="techlab-guests"
								onChange={(e) =>
									handle_change(
										"person",
										e
									)
								}
								required
							>
								<option
									value=""
									hidden
								>
									Please Select
								</option>
								<option value="1">
									1 Person
								</option>
								<option value="2">
									2 Persons
								</option>
								<option value="3">
									3 Persons
								</option>
								<option value="4">
									4 Persons
								</option>
							</select>
						</div>
					</div>

					{/*  Class */}
					<div class="des-from !border-r-0">
						<p>Class</p>
						<div class="flex flex-row">
							<img
								src="./img/icons/Vector (3).svg"
								alt=""
							/>
							<select
								class="outline-none px-2 py-2 w-full"
								name="ticketClass"
								id="techlab-ticketClass"
								onChange={(e) =>
									handle_change(
										"class",
										e
									)
								}
								required
							>
								<option
									value=""
									hidden
								>
									Please Select
								</option>
								<option value="Business">
									Business
								</option>
								<option value="Economy">
									Economy
								</option>
							</select>
						</div>
					</div>

					<button
						class="addCity"
						type="submit"
						id="techlab-addCity"
						disabled={
							booking_list?.length == 3
								? true
								: false
						}
					>
						<svg
							width="15px"
							height="15px"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 4.5v15m7.5-7.5h-15"
							/>
						</svg>
						<span class="text-sm">Book</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookingForm;
