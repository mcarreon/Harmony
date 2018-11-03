import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./button9.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: 'red'
  },
  input: {
    display: 'none',
  },
});

function TextButtons(props) {
  const { classes } = props;
  // debugger;
  return (
    <div>
      
      <Button color="primary" id= "btn10" className={classes.button}>
      </Button>
  
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);
