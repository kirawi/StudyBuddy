import React from 'react';

import MeetingCard from './MeetingCard';

const MeetingList = props => {
	let list_title = "";

	if (!props.meetings)  {
		return (
			<h1>Loading...</h1>
		);
	}

	if (props.meetings === 0) {
		return (
			<h1>No meetings found.</h1>
		);
	}

	switch (props.type) {
		case "upcoming":
			list_title = "Upcoming Meetings";
			break;
		case "available":
			list_title = "Available Meetings";
			break;
		default:
			console.log("Error: Unknown MeetingList type attribute.");
			break;
	}

	return (
		<div className="content">
			<span className="content-title">{list_title}</span>
			<div className="responsive-grid">
				{
					props.meetings.map(meeting => {
						return (
							<MeetingCard meeting={meeting} type={props.type} />
						);
					})
				}
			</div>
		</div>
	);
};

export default MeetingList;