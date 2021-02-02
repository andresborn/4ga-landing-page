import React from "react";
import PropTypes from "prop-types";

const divStyle = {
    width: "30%",
}

export const Card = props => {
	return (
		<div className="card" style={divStyle}>
			<img src={props.imgUrl} className="card-img-top" alt={props.alt} />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.content}</p>
				<a href={props.link} className="btn btn-primary">
					{props.label}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	imgUrl: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
	link: PropTypes.string,
	label: PropTypes.string
};
