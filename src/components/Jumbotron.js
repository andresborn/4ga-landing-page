import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div className="jumbotron jumbotron-fluid text-white align-self-center"
		style={{backgroundImage: `url('https://www.dw.com/image/54959312_101.jpg')`, backgroundPositionX: "center;", backgroundAttachment: "fixed;", backgroundRepeat: "no-repeat;"}}>
			<div className="container">
				<h1 className="display-4">{props.title}</h1>
				<p className="lead">{props.content}</p>
			</div>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string
};
