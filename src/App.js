import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";

function App() {
	return (
		<main className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</main>
	);
}

export default App;
