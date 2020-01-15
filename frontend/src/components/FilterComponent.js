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
  formControls: {
    margin: theme.spacing(0.6),
    width:180,
  },
  selectEmptys: {
    marginTop: theme.spacing(2)
  },
  root: {
    display: 'flex',
    justifyContent: 'left'
  },
  widths: {
    maxWidth: '11em',
    backgroundColor: 'white',
  },
  filterBTN: {
    backgroundColor: '#908393',
    border: 'rgb(255,73,0)',
    color: '#FFF5EE',
    fontFamily: 'Verdana',
    padding: '10px',
    width: '60px',
    height: '55px',
    marginTop: '6px',
    marginLeft: '8px',
    marginBottom: '20px',
    borderRadius: '5px'
  }
});

/*this component allows the user to filter the products by material, color and size*/
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

  //compares the selected object with the productObj object from CategryScreen.
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
          <FormControl variant='outlined' className={classes.formControls}>
            <InputLabel htmlFor='size'>Size</InputLabel>
            <Select className={classes.widths} value={size} onChange={this.handleInputChange('size')} input={<OutlinedInput labelWidth={40} name='size' id='size'/>}>
              <MenuItem  value=''><em>Alla Storlekar</em></MenuItem>
              {sizes.map((sizeNumber,index) => {
                return(
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={'size' + index} value={sizeNumber}>{sizeNumber}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl variant='outlined' className={classes.formControls}>
            <InputLabel htmlFor='color'>Färg</InputLabel>
            <Select className={classes.widths} value={color} onChange={this.handleInputChange('color')} input={<OutlinedInput labelWidth={50} name='color' id='color'/>}>
              <MenuItem value=''><em>Alla Färg</em></MenuItem>
              {colors.map((colorName,index) => {
                return(
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={'color' + index} value={colorName}>{colorName}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl variant='outlined' className={classes.formControls}>
            <InputLabel  htmlFor='material'>Material</InputLabel>
            <Select className={classes.widths} value={material} onChange={this.handleInputChange('material')} input={<OutlinedInput labelWidth={60} name='material' id='material'/>}>
              <MenuItem value=''><em>Alla Material</em></MenuItem>
              {materials.map((materialName,index) => {
                return(
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={'material' + index} value={materialName}>{materialName}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <button className={classes.filterBTN} onClick={this.onFilter}>Filter</button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(FilterComponent);
