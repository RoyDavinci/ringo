import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

function App() {
	return (
		<main className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</main>
	);
}

export default App;
