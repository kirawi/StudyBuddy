import React from 'react';

import MeetingList from './MeetingList';
import data from './data.json';

class Home extends React.Component {
	componentDidMount() {
		fetch("http://localhost:3030/api/Hello")
			.then(res => res.json())
			.then((result) => this.data = result)
	}

	render() {
		return (
			<main>
				<MeetingList title="Upcoming Meetings" meetings={data.registered_meetings} />
				<MeetingList title="Available Meetings" meetings={data.available_meetings} />
			</main>
		);
	}
}

export default Home;