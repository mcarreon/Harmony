import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import CA from "./components/CreateAccount"
import Profile from "./components/Profile"
import User from "./components/UserProfile"
import Concerts from "./components/Concerts"
import Friends from "./components/Friends"
import Button from "./components/Button"


const App = () => (
    <Router>
      <div>
        <Navbar />
        {/* <Login /> */}
        <Route exact path="/" component={Profile} />
        <Route exact path="/createaccount" component={CA} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user" component={User} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/friends" component={Friends} />
      </div>
      
    </Router>
  );
  
  export default App;
  