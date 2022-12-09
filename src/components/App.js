import React from "react";
import Nav from "./Nav";
import ListOfHogs from "./ListOfHogs"
import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<ListOfHogs allHogs={hogs} />
		</div>
	);
}

export default App;
