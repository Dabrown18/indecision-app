import React from 'react';

const Header = (props) => (
	<div className="header">
		<h1 className="header_title">{props.title}</h1>
		{props.subtitle && <h2 className="header_subtitle">{props.subtitle}</h2>}
	</div>
);

Header.defaultProps = {
	title: 'Indecision'
};

export default Header;