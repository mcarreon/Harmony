import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./button7.css";

const styles = theme => ({
    button: {
        margin: 'theme.spacing.unit',
        color: 'white',
     
        backgroundColor: 'red',
        '&:hover': {
            color: 'red',
            backgroundColor: '#ffe2e2',
          },
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
      
      <Button color="primary" id= "btn8" className={classes.button}>
      <Link className="createAcc" to= "/friends">+ Add More Friends</Link>
        
      </Button>
  
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);