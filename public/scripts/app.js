'use strict';

console.log('App.js is running');

var person = {
	name: 'Darron Brown',
	age: 30,
	location: 'Salt Lake City',
	sportsPlayed: ['Football', 'Basketball', 'Boxing']
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		person.name ? person.name : 'undefined'
	),
	console.log('Here is the name'),
	person.sportsPlayed.length > 0 ? React.createElement(
		'h3',
		null,
		'Here are your options'
	) : React.createElement(
		'h3',
		null,
		'There are no options'
	),
	React.createElement(
		'ul',
		null,
		React.createElement(
			'li',
			null,
			React.createElement(
				'h2',
				null,
				person.age
			)
		),
		React.createElement(
			'li',
			null,
			React.createElement(
				'h2',
				null,
				person.location != null && person.location
			)
		)
	)
);

var verifyLocation = function verifyLocation(location) {
	if (location != null) {
		return location;
	} else {
		return 'Location does not exist';
	}
};

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
