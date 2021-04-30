import React from 'react';

class Courses extends React.Component {
	render() {
		return (
			<main>
				<div className="courses-container">
					<div>
						<span>Courses</span>
						<div className="courses-sidebar">
							<div className="courses-filters">
								<span>Filters</span>
								<input type="text" placeholder="Course ID" />
								<input type="text" placeholder="Course Name" />
							</div>
		
							<div className="courses-list">
								<div className="courses-sort">
									
								</div>
								<div className="courses-content">
									<div className="courses-item">
										<span>Course Name</span>
										<span>Subject • Grade • Course ID</span>
									</div>
									<div className="courses-item">
										<span>Course Name</span>
										<span>Subject • Grade • Course ID</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<span>Schedule</span>
						<table className="courses-schedule">
							<thead>
								<tr>
									<th>Period</th>
									<th>Course ID</th>
									<th>Course Name</th>
									<th>Section</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>N/A</td>
									<td>N/A</td>
									<td>N/A</td>
									<td>N/A</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</main>
		);
	}
}

export default Courses;