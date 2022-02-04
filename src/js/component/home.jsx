import React from "react";

import propTypes from "prop-types";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
// this componnent will take number as props and display them in separte boxes
export const Home = (props) => {
	return (
		<div className="container bg-dark d-flex justify-content-center">
			<div className="p-3 m-1 rounded bg-secondary">
				<i class="far fa-clock"></i>
			</div>
			<div className="p-3 m-1 rounded bg-secondary">{props.six}</div>
			<div className="p-3 m-1 rounded bg-secondary">{props.fifth}</div>
			<div className="p-3 m-1 rounded bg-secondary">{props.fourth}</div>
			<div className="p-3 m-1 rounded bg-secondary">{props.third}</div>
			<div className="p-3 m-1 rounded bg-secondary">{props.second}</div>
			<div className="p-3 m-1 rounded bg-secondary">{props.first}</div>
		</div>
	);
};
Home.propTypes = {
	six: propTypes.number,
	fifth: propTypes.number,
	fourth: propTypes.number,
	third: propTypes.number,
	second: propTypes.number,
	first: propTypes.number,
};
