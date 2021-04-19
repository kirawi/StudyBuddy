import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
	if (!props.currentUser) {
		return (
			<h1>Not logged in!</h1>
		);
	}

	return null;
};

const LoggedInView = props => {
	if (props.currentUser) {
		return (
			<div>
				<button class="create-meeting">+</button>
				<div class="account-info">
					<img src="img_avatar2.png" alt="avatar"></img>
					<h1>John Doe</h1>
				</div>
			</div>
		);
	}

	return null;
};

class Header extends React.Component {
	render() {
		return (
			<header>
				<h1 class="title">StudyBuddy</h1>
				<ul class="nav-ul">
					<li><h1 class="link active"><Link to="/">Home</Link></h1></li>
					<li><h1 class="link"><Link to="/courses">Courses</Link></h1></li>
				</ul>
				<div class="right-header">
					<LoggedOutView currentUser={this.props.currentUser} />
					<LoggedInView currentUser={this.props.currentUser} />
				</div>
			</header>
			)
		}
}

export default Header;