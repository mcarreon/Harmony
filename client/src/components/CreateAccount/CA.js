import React from 'react';
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
import anime from "./anime.js";

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



class TextFields extends React.Component {

  componentDidMount() {
    anime.animateThing2();
  }

  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container}  noValidate autoComplete="off">
      <span class="CaForm" id="nameForm">
      <span class= "CaHead"> Create Account Here! </span>
        <TextField
          id="standard-dense"
          label="Username"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <TextField
          id="standard-password-input"
          label="Repeat Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <TextField
            id="firstName"
            label="First Name"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
        <TextField
            id="lastName"
            label="Last Name"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <form className={classes.container} noValidate>
          <span id="bDay">Birthday?</span>
          <TextField
          id="date"

          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
            />
          <TextField
              id="zipCode"
              label="Zip Code"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
            />
            </form>
        
   
        <Button2 />
      </span>

      {/* <span class="CaForm" id="nameForm2">
      <span class= "CaHead" id="AU"> Who are you? </span>
        <TextField
            id="firstName"
            label="First Name"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
        <TextField
            id="lastName"
            label="Last Name"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <form className={classes.container} noValidate>
          <span id="bDay">Birthday?</span>
        <TextField
        id="date"

        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
          />
        <TextField
            id="zipCode"
            label="Zip Code"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          </form>
          <Button5 />
      </span> */}

      <span class="CaForm" id="nameForm3">
      <span class= "CaHead" id="MI"> Tell us your music interests! </span>

        <Genres />
        <span id="artists">Tell us what artists you are into</span>
        <TextField
          id="standard-textarea"
          label="Artists"
          placeholder="Artists"
          multiline
          className={classes.textField}
          margin="normal"
        />
      <span id="PU"> Upload a picture of yourself! </span>
      <Button variant="contained" component="span" id="imgU" className={classes.button}>
          Upload
        </Button>
   
        <Button3 />
      </span>
      </form>

    
      
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
