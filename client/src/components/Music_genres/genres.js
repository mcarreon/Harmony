import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import "./genres.css";

const styles = {
  root: {
    color: "red",
    '&$checked': {
      color: "red",
    },
  },
  checked: {},
};

class CheckboxLabels extends React.Component {
  state = {
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      
      <FormGroup row id="CaForm2">
      <FormControlLabel
        control={
          <Checkbox
            
            checked={this.state.checkedA}
            onChange={this.handleChange('checkedA')}
            value="checkedA"
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
          />
        }
        label="Pop Music"
      />
      <FormControlLabel
        control={
          <Checkbox
            
            checked={this.state.checkedB}
            onChange={this.handleChange('checkedB')}
            value="checkedB"
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
          />
        }
        label="Rock N' Roll"
      />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedC}
              onChange={this.handleChange('checkedC')}
              value="checkedC"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="Rap"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedE}
              onChange={this.handleChange('checkedE')}
              value="checkedE"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="Hip Hop"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedD}
              onChange={this.handleChange('checkedD')}
              value="checkedD"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="Electronic Dance Music"
        />

       
      </FormGroup>

    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxLabels);
