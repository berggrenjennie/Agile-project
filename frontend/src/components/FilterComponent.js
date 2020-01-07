//core functionality from react.
import React, { Component } from 'react';

//core functionality from material-ui.
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


//material-ui styling stuff.
const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    width:200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  root: {
    margin: 10,
    marginTop: 9,
    display: 'flex',
    justifyContent: 'center'
  },
  width: {
    maxWidth: '12em'
  }
});

class FilterComponent extends Component {
  constructor(){
    super();
    this.state = {
        size: '',
        material: '',
        color: ''
    }
  }

  //handeles all the input field data changes from form and updates the size, material and color states.
  handleInputChange = field => event => {
    const state = {};
    state[field] = event.target.value;
    this.setState(state);
  }

  //compares the selected object with the timeEntries object from TimeEntriesComponent.
  onFilter = event => {
    event.preventDefault();
    const selectedObj = {
      size: this.state.size,
      material: this.state.material,
      color: this.state.color
    }
    this.props.onFilter(selectedObj);
  }

  render() {
    const { classes } = this.props;
    const { size, color, material } = this.state;
    const materials = ['Polyester', 'Bomull', 'Fleece'];
    const sizes = ['44/46', '48/50', '56', '62/68', '74/80'];
    const colors = ['grå', 'vit', 'svart', 'röd', 'blå', 'multi', 'rosa', 'grön', 'orange'];

    return (
      <div>
        <form className={classes.root} autoComplete='off'>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel  htmlFor='size'>Size</InputLabel>
            <Select className={classes.width} value={size} onChange={this.handleInputChange('size')} input={<OutlinedInput labelWidth={40} name='size' id='size'/>}>
              <MenuItem  value=''><em>Alla Storlekar</em></MenuItem>
              {sizes.map((sizeNumber,index) => {
                return(
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={'size' + index} value={sizeNumber}>{sizeNumber}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel htmlFor='color'>Färg</InputLabel>
            <Select className={classes.width} value={color} onChange={this.handleInputChange('color')} input={<OutlinedInput labelWidth={50} name='color' id='color'/>}>
              <MenuItem value=''><em>Alla Färg</em></MenuItem>
              {colors.map((colorName,index) => {
                return(
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={'color' + index} value={colorName}>{colorName}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel  htmlFor='material'>Material</InputLabel>
            <Select className={classes.width} value={material} onChange={this.handleInputChange('material')} input={<OutlinedInput labelWidth={60} name='material' id='material'/>}>
              <MenuItem value=''><em>Alla Material</em></MenuItem>
              {materials.map((materialName,index) => {
                return(
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={'material' + index} value={materialName}>{materialName}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <button className='filterBTN' onClick={this.onFilter}>Filter</button>
        </form>
      </div>
    )
  }
}
export default withStyles(styles)(FilterComponent);
