
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./Pages/Contact";
import Application from "./Pages/Application";
import Home from "./Pages/Home";
import Wrapper from "./Components/Wrapper/Wrapper";
import AboutMe from "./Pages/AboutMe";

function App() {
	return (
		<div className="App">
			
			<BrowserRouter>
				<Nav /> 
				<Wrapper>
					<Switch>
						<Route path="/AboutMe">
							<AboutMe />
						</Route>
						<Route path="/Applications">
							<Application />
						</Route>
						<Route path="/Contact">
							<Contact />
						</Route>
						<Route path="/Home">
							<Home />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Wrapper>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
