import React from "react";
import "./App.css";
import Content from "./Components/Content";
import {
	Navbar,
	Button,
	Alignment,
	Card,
	Elevation,
	H1,
	H2,
} from "@blueprintjs/core";
import logo from "./images/testlogo.png";

function App() {
	return (
		<div className="App">
			<Navbar className="nav-grid" fixedToTop="true">
				<Navbar.Group>
					<img src={logo} style={{ height: "90%" }}></img>
				</Navbar.Group>
				<div>
					<H1 className="nav-heading">Module Name</H1>
				</div>
				<div>
					<Navbar.Group align={Alignment.RIGHT}>
						<Button className="bp3-minimal" icon="dashboard" text="DashBoard" />
						<Navbar.Divider />
						<Button className="bp3-minimal" icon="user" text="" />
						<Button className="bp3-minimal" icon="cog" text="" />
					</Navbar.Group>
				</div>
			</Navbar>
			<Content></Content>
		</div>
	);
}

export default App;
