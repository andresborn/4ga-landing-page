import React from "react";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<nav className="navbar bg-dark">
			<a href="/" className="navbar-brand text-white">{props.title}</a>
			<form className="form-inline">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder={props.search}
					aria-label="Search"
				/>
				<button
					className="btn btn-outline-success my-2 my-sm-0"
					type="submit">
					Go
				</button>
			</form>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string,
	search: PropTypes.string
};