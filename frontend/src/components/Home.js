import React from 'react';

class Home extends React.Component {
	componentDidMount() {
		fetch("http://localhost:3030/api/Hello")
			.then(res => res.json())
			.then((result) => this.data = result)
	}

	render() {
		return (
			<main>
			<div className="content">
				<span className="content-title">Upcoming Meetings</span>
				<div className="responsive-grid">
					<div className="responsive-grid-cell">
						<div className="meeting-card meeting-upcoming meeting-live">
							<div className="meeting-info">
								<div className="meeting-header">
									<span className="meeting-title">Meeting Title</span>
									<span className="meeting-course">Course Name</span>
								</div>
								<span className="meeting-description">Meeting blurb goes here. Anything people need to know about the meeting: objective, required materials, etc.</span>
							</div>
							<hr />
							<div className="meeting-footer">
								<span className="meeting-time">Live</span>
								<button className="meeting-button">
									<span>Join</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="content">
				<span className="content-title">Available Meetings</span>
				<div className="responsive-grid">
					<div className="responsive-grid-cell">
						<div className="meeting-card meeting-register">
							<div className="meeting-info">
								<div className="meeting-header">
									<span className="meeting-title">Meeting Title</span>
									<span className="meeting-course">Course Name</span>
								</div>
								<span className="meeting-description">Meeting blurb goes here. Anything people need to know about the meeting: objective, required materials, etc.</span>
							</div>
							<hr />
							<div className="meeting-footer">
								<span className="meeting-time">4/9/21 7:00 PM  •  2 Hours</span>
								<button className="meeting-button">
									<span>Register</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		);
	}
}

export default Home;