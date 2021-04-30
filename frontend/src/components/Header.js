import React from 'react';
import { Link } from 'react-router-dom';

const AccountView = props => {
	if (!props.user) {
		return (
			<h1>Not logged in!</h1>
		);
	} else {
		return (
			<div className="right-header">
				<button className="create-meeting">+</button>
				<div className="account-info">
					<img src="img_avatar2.png" alt="avatar"></img>
					<h1>{props.user}</h1>
				</div>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<header>
				<h1 className="title">StudyBuddy</h1>
				<ul className="nav-ul">
					<li><h1 className="link active"><Link to="/">Home</Link></h1></li>
					<li><h1 className="link"><Link to="/courses">Courses</Link></h1></li>
				</ul>
				<div className="right-header">
					<AccountView user={this.props.user} />
				</div>
			</header>
		);
	}
}

export default Header;