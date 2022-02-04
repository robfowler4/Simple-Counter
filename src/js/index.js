//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/home.jsx";

let seconds = 0;
setInterval(() => {
	seconds++;
	let one = Math.floor(seconds / 1);
	let second = Math.floor(seconds / 10);
	let three = Math.floor(seconds / 100);
	let four = Math.floor(seconds / 1000);
	let five = Math.floor(seconds / 10000);
	let six = Math.floor(seconds / 100000);
	ReactDOM.render(
		<Home
			six={six % 10}
			fifth={five % 10}
			fourth={four % 10}
			third={three % 10}
			second={second % 10}
			first={one % 10}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application

// need to use setinterval() to update seconds numbers on every second
// setinterval() need to also rerender home on every second
// make sure to pass props to the home component
