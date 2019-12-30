//core functionality from react.
import React, { Component , Fragment } from 'react';
import axios from 'axios';
//core functionality from material-ui.
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
//CSS imports.
import '../styles/Admin.css';

//material-ui styling stuff.
const styles = theme => ({
  formControl: {
    minWidth: 250,
    margin: theme.spacing(2),
  },
  selectEmpty: {
    margin: theme.spacing(2),
  },
  root: {
    margin: 10,
    marginTop: 9,
    overflowX: 'auto',
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 250,
    },
  },
});

// background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #DECCCA 30%, #FFF5EE 90%);
  border-radius: 3px;
  border: 0;
  color: #505050;
  width:400px;
  height: 65px;
  padding: 0 30px;
  box-shadow: 0 2px 4px 1px rgba(255, 105, 135, 0.3);
`;

class AddProductComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      productName: '',
      category: '',
      subCategory1: '',
      subCategory2: '',
      description:'',
      brand:'',
      material:'',
      size:'',
      color:'',
      price:0,
      isRea:false,
      reaPrice:0,
      imagePath:'',
      bigImagePath:'',
      icon1:'',
      icon2:'',
      icon3:'',
    }
  }

  //handeles all the input field data changes from form and updates the employee, client, project and task states.
  handleInputChange = field => event => {
    const state = {};
    state[field] = event.target.value;
    this.setState(state);
  }

  /*A method which adds an object (newProduct) to API,
 by using Post method.
}*/
  addProduct= event => {
    event.preventDefault();
    let url = 'http://localhost:2000/products';
    const newProduct = {
      category: this.state.category,
      subCategory1: this.state.subCategory1,
      subCategory2: this.state.subCategory2,
      name: this.state.productName,
      description: this.state.description,
      brand: this.state.brand,
      material: this.state.material,
      size: this.state.size,
      color:this.state.color,
      price:this.state.price,
      isRea:this.state.isRea,
      reaPrice:this.state.reaPrice,
      imagePath: this.state.imagePath,
      bigImagePath: this.state.bigImagePath,
      icon1: this.state.icon1,
      icon2: this.state.icon2,
      icon3: this.state.icon3
    }

   axios.post(url,newProduct)
    .then(response => {
      // console.log('Success:', response))
      this.setState({
        productName: '',
        category: '',
        subCategory1: '',
        subCategory2: '',
        description:'',
        brand:'',
        material:'',
        size:'',
        color:'',
        price:0,
        isRea:false,
        reaPrice:0,
        imagePath:'',
        bigImagePath:'',
        icon1:'',
        icon2:'',
        icon3:'',
    })
    })
    .catch(error => console.error('Error:', error));
  }
  render() {
    const { productName, category , subCategory1 , subCategory2 , description , brand , material , size , color ,
      price , isRea , reaPrice , imagePath , bigImagePath , icon1 , icon2 , icon3 } = this.state;
    const { classes} = this.props;
    return (
      <Fragment>
        <h2>Add new product</h2>
        <form className={classes.root} autoComplete='off'>
          <div className="flex-container">
            <div>
              <TextField id="productName" name='productName'  value={productName} onChange={this.handleInputChange('productName')} label="Product Name" variant="outlined" required/>
              <FormControl variant='outlined' className={classes.formControl} required>
                <InputLabel  htmlFor='category'>category</InputLabel>
                <Select className={classes.width} value={category} onChange={this.handleInputChange('category')} input={<OutlinedInput labelWidth={65} name='category' id='category'/>}>
                  <MenuItem value=''><em>Category</em></MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Pojke'>Pojke</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Flicka'>Flicka</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Neutral'>Neutral</MenuItem>
                </Select>
              </FormControl>
              <TextField id="subCategory1" name='subCategory1'  value={subCategory1} onChange={this.handleInputChange('subCategory1')} label="subCategory1" variant="outlined" required />
              <TextField id="subCategory2" name='subCategory2'  value={subCategory2} onChange={this.handleInputChange('subCategory2')} label="subCategory2" variant="outlined" />
              <TextField id="description" name='description'  value={description} onChange={this.handleInputChange('description')} label="Description" multiline rows="10" defaultValue="Description" variant="outlined"/>
            </div>
            <div>
              <TextField id="brand" name='brand'  value={brand} onChange={this.handleInputChange('brand')} label="Brand" variant="outlined" />
              <TextField id="material" name='material'  value={material} onChange={this.handleInputChange('material')} label="Material" variant="outlined" />
              <TextField id="size" name='size'  value={size} onChange={this.handleInputChange('size')} label="Size" variant="outlined" />
              <TextField id="color" name='color'  value={color} onChange={this.handleInputChange('color')} label="Color" variant="outlined" />
              <TextField id="price" name='price'  value={price} onChange={this.handleInputChange('price')} label="Price" variant="outlined" type="number" required/>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel  htmlFor='category'>isRea</InputLabel>
                <Select className={classes.width} value={isRea} onChange={this.handleInputChange('isRea')} input={<OutlinedInput labelWidth={65} name='isRea' id='isRea'/>}>
                  <MenuItem value=''><em>isRea</em></MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='true'>Rea</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='false'>Not Rea</MenuItem>
                </Select>
              </FormControl>
              <TextField id="reaPrice" name='price'  value={reaPrice} onChange={this.handleInputChange('reaPrice')} label="Rea Price" variant="outlined" type="number"/>
            </div>
            <div>
              <TextField id="imagePath" name='imagePath'  value={imagePath} onChange={this.handleInputChange('imagePath')} label="imagePath" multiline rows="3" defaultValue="imagePath" variant="outlined" required/>
              <TextField id="bigImagePath" name='bigImagePath'  value={bigImagePath} onChange={this.handleInputChange('bigImagePath')} label="bigImagePath" multiline rows="3" defaultValue="bigImagePath" variant="outlined" />
              <TextField id="icon1" name='icon1'  value={icon1} onChange={this.handleInputChange('icon1')} label="icon1" multiline rows="3" defaultValue="icon1" variant="outlined" />
              <TextField id="icon2" name='icon2'  value={icon2} onChange={this.handleInputChange('icon2')} label="icon2" multiline rows="3" defaultValue="icon2" variant="outlined" />
              <TextField id="icon3" name='icon3'  value={icon3} onChange={this.handleInputChange('icon3')} label="icon3" multiline rows="2" defaultValue="icon3" variant="outlined" />
            </div>
          </div>
          <div className="addDivBTN">
            {/*<Button className="addBTN" variant="contained" onClick={this.addProduct}>Add product</Button>*/}
            <StyledButton onClick={this.addProduct}>Add Product</StyledButton>
          </div>
        </form>
      </Fragment>
    )
  }
}
export default withStyles(styles)(AddProductComponent);
