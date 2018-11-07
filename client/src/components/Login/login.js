import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from "../Button";
import { Link } from "react-router-dom";
import Button9 from "../Button9";
// import CA from "../CreateAccount"
import "./login.css";
import axios from 'axios'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username:'',
      password: '',
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')
    axios
      .post('user/login', {
        username: this.state.usernameIn,
        password: this.state.passwordIn
      }).then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          })
          // update the state to redirect to home
          this.setState({
            redirectTo: '/'
          })
        }
      }).catch(error => {
        console.log('login error: ')
        console.log(error);
      })
  }  
  
  render() {
    if (this.state.redirectTo) {
      return <Link to={{ pathname: this.state.redirectTo}} />
    } else {
      return (
        <div className="loginbox">
        <h3 className="logintitle">Log In</h3>
        <form>
          <div className="userentry">
          <span id="username">Username: </span>
          <Input
            id="usernameIn"
            name="username"
            defaultValue=""
            // error 
            placeholder=""
            className="logininput"
            inputProps={{
              'aria-label': 'Description',
            }}
            value={this.state.username}
            onChange={this.handleChange}
          />
          </div>
        <div className="passentry">
          <span id="password">Password: </span>
          <Input
            id="passwordIn"
            placeholder=""
            defaultValue=""
            type="password"
            name="password"
            className="logininput"
            inputProps={{
              'aria-label': 'Description',
            }}
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        </form>
        <Button9
        className=""
        onClick={this.handleSubmit}
        type="submit"
        >
        </Button9>
        <Link id="createAcc" to= "/createaccount">Don't have an account? </Link> 
        {/* <a href="https://material-ui.com/demos/expansion-panels/" id="createAcc">Don't have an account? </a>  */}
      </div>
      )
    }
  }
}

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   input: {
//     margin: theme.spacing.unit,
    
//   },
//   InputsContainer: {
//     margin: '50px auto',
//     width: '200px',
//     height: '400px',
//     border: '8px solid grey',
//     borderRadius: '150px 150px',
//     padding: '25px 15px',
//     display: 'flex',
//     flexWrap: 'wrap',
//  },
// });
// function Inputs(props) {
//   const { classes } = props;

//   return (
    
//     <div className={classes.InputsContainer}>
//       <span id="username">Username:</span>
//       <Input
//         id="usernameIn"
//         label="Username"
//         defaultValue=""
//         // error 
//         className={classes.input}
//         inputProps={{
//           'aria-label': 'Description',
//         }}
        
//       />
//       <span id="password">Password: </span>
//       <Input
//         id="passwordIn"
//         defaultValue=""
//         type="password"
//         className={classes.input}
        
//         inputProps={{
//           'aria-label': 'Description',
//         }}
//       />
//           <Button9 />
//       <Link id="createAcc" to= "/createaccount">Don't have an account? </Link> 
//       {/* <a href="https://material-ui.com/demos/expansion-panels/" id="createAcc">Don't have an account? </a>  */}
//     </div>
//   );
// }
// 
// Inputs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(LoginForm);

export default (LoginForm)
