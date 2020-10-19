import React, { Component } from "react";
import { Container, Navbar, Image } from "react-bootstrap";

import "./styles/App.css";
import dogImg from "./assets/dog.jpg";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="#home">Demo App</Navbar.Brand>
					</Container>
				</Navbar>
				<Container>
					<div
						style={{
							marginTop: "3em",
						}}
					>
						<Image style={{ maxWidth: "100%" }} src={dogImg} />
					</div>
				</Container>
			</div>
		);
	}
}

export default App;
