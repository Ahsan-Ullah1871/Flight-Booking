import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import BookingForm from "./Components/BookingForm";
import BookingList from "./Components/BookingList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div>
				<Header />
				<section>
					{/*    Input Data   */}
					<BookingForm />

					{/*  Preview Data */}
					<BookingList />
				</section>
			</div>
		</Provider>
	);
}

export default App;

