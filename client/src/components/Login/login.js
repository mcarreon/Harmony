import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from "../Button";
import { Link } from "react-router-dom";
import Button9 from "../Button9";
// import CA from "../CreateAccount"
import "./login.css";

const styles = theme => ({
  container: {
    display: 'flex',
    // flexWrap: 'wrap',
  },
  input: {
    // margin: theme.spacing.unit,
    
  },
  InputsContainer: {
    margin: '50px auto',
    width: '200px',
    height: '400px',
    border: '8px solid grey',
    borderRadius: '150px 150px',
    padding: '25px 15px',
    display: 'flex',
    flexWrap: 'wrap',
    
 },

});

function Inputs(props) {
  const { classes } = props;

  return (
    
    <div className={classes.InputsContainer}>
      <span id="username">Username:</span>
      <Input
        id="usernameIn"
        label="Username"
        defaultValue=""
        // error 
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        
      />
      <span id="password">Password: </span>
      <Input
        id="passwordIn"
        defaultValue=""
        type="password"
        className={classes.input}
        
        inputProps={{
          'aria-label': 'Description',
        }}
      />
          <Button9 />
      <Link id="createAcc" to= "/createaccount">Don't have an account? </Link> 
      {/* <a href="https://material-ui.com/demos/expansion-panels/" id="createAcc">Don't have an account? </a>  */}
    </div>
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);
