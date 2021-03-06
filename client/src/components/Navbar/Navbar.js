import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import "./Navbar.css";

const styles = {
  root: {
    flexGrow: 1,

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <AppBar position="static" style={{ backgroundColor: `red` }}>
        <Toolbar>
          <Button color="inherit" to= "/login"><Link className="createAcc" to= "/login">Login </Link> </Button>
          <Typography variant="h6" color="inherit" className={classes.grow}></Typography>
          <Button className="logoBtn">
            <Link className="homelogo" to= "/">
              <img className="mainlogo" src="./Harmonylogo.png" alt="harmonylogo"/>
            </Link>
          </Button>
          <Typography variant="h6" color="inherit" className={classes.grow}></Typography>
          <Button color="inherit" to= "/createaccount"><Link className="createAcc" to= "/createaccount">Sign up </Link> </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
