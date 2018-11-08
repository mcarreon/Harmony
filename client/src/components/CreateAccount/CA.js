import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button2 from "../Button2";
import Button3 from "../Button3";
import Button5 from "../Button5";
import Button from '@material-ui/core/Button';
import Genres from "../Music_genres";
// import anime from "./anime.js";
import axios from "axios"

import "./CA.css";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});



class TextFields extends Component {
  constructor() {
    super()
    this.state={
      username: '',
      password: '',
      confirmPassword: '',
    }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }
  // componentDidMount() {
  //   anime.animateThing2();
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit(event) {
    console.log('sign-up handleSubmit, username: ')
    console.log(this.state.username)
    event.preventDefault();

    axios.post('/user/', {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log(response)
        if (!response.data.errmsg) {
          console.log("successful signup")
          this.setState({
            redirectTo: '/login'
          })
        } else {
          console.log('username already taken')
        }
      }).catch(error => {
        console.log('signup error: ')
        console.log(error)
      })
  }

  render() {

    return (
      <div className="signupbox">
			  <h1>Sign up</h1>
			  <form className="form-horizontal">
        <div className="userentry">
          <span className="username">Username: </span>
          <input
            id=""
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
          <span className="password">Password: </span>
          <input
            id=""
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
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>
    );
  }
}


export default withStyles(styles)(TextFields);
