import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./button11.css";

const styles = theme => ({
    button: {
        margin: 'theme.spacing.unit',
        color: 'white',
     
        // backgroundColor: '#ffe2e2',
        '&:hover': {
            color: 'red',
            backgroundColor: 'white',
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
      
      <Button color="primary" id= "btn12" className={classes.button}>
      Search
      </Button>
  
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);
