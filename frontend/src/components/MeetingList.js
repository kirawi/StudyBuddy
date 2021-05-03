import React from 'react';

import MeetingCard from './MeetingCard';

const MeetingList = props => {
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

	return (
		<div className="content">
			<span className="content-title">{props.title}</span>
			<div className="responsive-grid">
				{
					props.meetings.map(meeting => {
						return (
							<MeetingCard meeting={meeting} />
						);
					})
				}
			</div>
		</div>
	);
};

export default MeetingList;