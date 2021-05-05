import React from 'react';



const MeetingCard = props => {
	const meeting = props.meeting;

	if (props.type === "upcoming") {
		return (
			<div className="responsive-grid-cell">
				<div className="meeting-card meeting-upcoming meeting-live">
					<div className="meeting-info">
						<div className="meeting-header">
							<span className="meeting-title">{meeting.title}</span>
							<span className="meeting-course">{meeting.course}</span>
						</div>
						<span className="meeting-description">{meeting.description}</span>
					</div>
					<hr />
					<div className="meeting-footer">
						<span className="meeting-time">{meeting.date} • {meeting.length}</span>
						<button className="meeting-button">
							<span>Join</span>
						</button>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="responsive-grid-cell">
				<div className="meeting-card meeting-register">
					<div className="meeting-info">
						<div className="meeting-header">
							<span className="meeting-title">{meeting.title}</span>
							<span className="meeting-course">{meeting.course}</span>
						</div>
						<span className="meeting-description">{meeting.description}</span>
					</div>
					<hr />
					<div className="meeting-footer">
						<span className="meeting-time">{meeting.date} • {meeting.length}</span>
						<button className="meeting-button">
							<span>Register</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
};

export default MeetingCard;