import logo from './logo.svg';
import './App.css';
import warning from './warning.svg';
import error from './error.svg';
import avatar from './img_avatar2.png';
import './normalize.css';
import './homepage.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <HomePage/>
                </Route>
                <Route path="/">
                    <SignIn/>
                </Route>
            </Switch>
        </Router>
    );
}

function SignIn() {
	return (
	  <div className="App">
		<h1> StudyBuddy!</h1>
        <Link to="/home">
		    <button type="button">Sign In</button>
        </Link>
	  </div>
	);
}

function HomePage() {
    return (
      <div>
        <header>
              <h1 class="title">StudyBuddy</h1>
              <ul class="nav-ul">
                  <li><h1 class="link active"><a href="">Home</a></h1></li>
                  <li><h1 class="link"><a href="">Classes</a></h1></li>
              </ul>
              <div class="right-header">
                  <button class="create-meeting">+</button>
                  <div class="account-info">
                      <img src={avatar} alt="avatar"/>
                      <h1>John Doe</h1>
                  </div>
              </div>
          </header>
  
          <main>
              <div>
                  <h2>Upcoming Meetings [=]</h2>
                  <table class="meeting-container">
                      <tbody>
                          <tr>
                              <td><img class="icon" src={warning} alt="warning"/></td>
                              <td><img class="icon" src={error} alt="error"/></td>
                              <td>[1-14-2021 4:00 PM] [1:30:00] AP Calculus ⋅ Group Project</td>
                          </tr>
                          <tr>
                              <td>	</td>
                              <td><img class="icon" src={error} alt="error"/></td>
                              <td>[1-14-2021 4:00 PM] [1:30:00] AP Calculus ⋅ Group Project</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
  
              <div>
                  <h2>Avilable Meetings [=]</h2>
                  <table class="meeting-container">
                      <tbody>
                          <tr>
                              <td></td>
                              <td>A</td>
                              <td>[1-14-2021 4:00 PM] [1:30:00] AP Calculus ⋅ Group Project</td>
                          </tr>
                          <tr>
                              <td></td>
                              <td>A</td>
                              <td>[1-14-2021 4:00 PM] [1:30:00] AP Calculus ⋅ Group Project</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </main>
      </div>
    );
  }

export default App;
