import React, {Component} from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import CA from "./components/CreateAccount"
import Profile from "./components/Profile"
import User from "./components/UserProfile"
import Concerts from "./components/Concerts"
import Friends from "./components/Friends"
import Button from "./components/Button"


class App extends Component {
  constructor() {
    super()
    this.state={
      loggedIn: false,
      username: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }
  updateUser (userObject) {
    this.setState(userObject)
  }
  getUser() {
    axios.get('/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  render () {
    return (
    <Router>
      <div>
        <Navbar />
        {/* <Login /> */}
        <Route exact path="/" component={Profile} />
        <Route exact path="/createaccount" component={CA} />
        <Route 
          exact path="/login" 
          render ={() => 
          <Login 
          updateUser={this.updateUser}
        />}
        />
        <Route exact path="/user" component={User} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/friends" component={Friends} />
      </div>  
    </Router>
    )
  }
}
export default App;