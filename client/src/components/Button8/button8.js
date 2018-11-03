import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./button8.css";

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
      
      <Button color="primary" id= "btn9" className={classes.button}>
      &#10004;
      </Button>
  
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);
