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
import IconButton from '@material-ui/core/IconButton';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
//CSS imports.
import '../styles/Admin.css';

//material-ui styling stuff.
const styles = theme => ({
  formControl: {
    minWidth: 250,
    margin: theme.spacing(2),
  },
  selectEmpty: {
    margin: theme.spacing(0),
  },
  root: {
    margin: 10,
    marginTop: 9,
    overflowX: 'auto',
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 250,
    },
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  iconButton:{
    color:'#908393',
  }
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
      rating:'',
      material:'',
      size:'',
      color:'',
      price:0,
      isSale:false,
      salePercent:0,
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
      rating: this.state.rating,
      material: this.state.material,
      size: this.state.size,
      color:this.state.color,
      price:this.state.price,
      isSale:this.state.isSale,
      salePercent:this.state.salePercent,
      isOnlyBigImage:this.state.isOnlyBigImage,
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
        material:'',
        size:'',
        color:'',
        price:0,
        rating:0,
        isSale:false,
        salePercent:0,
        isOnlyBigImage:false,
        imagePath:'',
        bigImagePath:'',
        icon1:'',
        icon2:'',
        icon3:'',
    })
    })
    .catch(error => console.error('Error:', error));
  }

  navigateToAdmin= event => {
    this.props.history.push('/admin');
    event.preventDefault();
  }
  render() {
    const { productName, category , subCategory1 , subCategory2 , description , rating , material , size , color ,
      price , isSale , salePercent , isOnlyBigImage , imagePath , bigImagePath , icon1 , icon2 , icon3 } = this.state;
    const { classes} = this.props;
    return (
      <Fragment>
        <h2>Lägg till en ny produkt</h2>
        <form className={classes.root} autoComplete='off'>
          <div className="flex-container">
            <div>
              <TextField id="productName" name='productName'  value={productName} onChange={this.handleInputChange('productName')} label="Produktnamn" variant="outlined" required/>
              <FormControl variant='outlined' className={classes.formControl} required>
                <InputLabel  htmlFor='category'>Kategori</InputLabel>
                <Select className={classes.select} value={category} onChange={this.handleInputChange('category')} input={<OutlinedInput labelWidth={65} name='category' id='category'/>}>
                  <MenuItem value=''><em>Category</em></MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Pojke'>Pojke</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Flicka'>Flicka</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Neutral'>Neutral</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant='outlined' className={classes.formControl} required>
                <InputLabel  htmlFor='subCategory1'>Kategori</InputLabel>
                <Select className={classes.width} value={subCategory1} onChange={this.handleInputChange('subCategory1')} input={<OutlinedInput labelWidth={65} name='subCategory1' id='subCategory1'/>}>
                  <MenuItem value=''><em>Underkategori 1</em></MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Överdelar'>Överdelar</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Nederdelar'>Nederdelar</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Jumpsuits'>Jumpsuits</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Ytterkläder'>Ytterkläder</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Festkläder'>Festkläder</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Nattkläder'>Nattkläder</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Accessoarer'>Accessoarer</MenuItem>
                </Select>
              </FormControl>
              <TextField id="subCategory2" name='subCategory2'  value={subCategory2} onChange={this.handleInputChange('subCategory2')} label="Underkategori 2" variant="outlined" />
              <TextField id="description" name='description'  value={description} onChange={this.handleInputChange('description')} label="Produktinformation" multiline rows="10" defaultValue="Description" variant="outlined"/>
            </div>
            <div>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel  htmlFor='material'>Material</InputLabel>
                <Select className={classes.select} value={material} onChange={this.handleInputChange('material')} input={<OutlinedInput labelWidth={65} name='material' id='material'/>}>
                  <MenuItem value=''><em>Material</em></MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Polyester'>Polyester</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Bomull'>Bomull</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='Fleece'>Fleece</MenuItem>
                </Select>
              </FormControl>
              <TextField id="size" name='size'  value={size} onChange={this.handleInputChange('size')} label="Storlek" variant="outlined" />
              <TextField id="color" name='color'  value={color} onChange={this.handleInputChange('color')} label="Färg" variant="outlined" />
              <TextField id="price" name='price'  value={price} onChange={this.handleInputChange('price')} label="Price" variant="outlined" type="number" required/>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel  htmlFor='isSale'>isRea</InputLabel>
                <Select className={classes.width} value={isSale} onChange={this.handleInputChange('isSale')} input={<OutlinedInput labelWidth={65} name='isSale' id='isSale'/>}>
                  <MenuItem value=''><em>isRea</em></MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='true'>Rea</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='false'>Inte Rea</MenuItem>
                </Select>
              </FormControl>
              <TextField id="salePercent" name='price'  value={salePercent} onChange={this.handleInputChange('salePercent')} label="Rea Procent" variant="outlined" type="number"/>
              <TextField id="rating" name='rating'  value={rating} onChange={this.handleInputChange('rating')} label="Rating" variant="outlined" type="number"/>
            </div>
            <div>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel  htmlFor='isOnlyBigImage'>Är det en bara stor bild</InputLabel>
                <Select className={classes.width} value={isOnlyBigImage} onChange={this.handleInputChange('isOnlyBigImage')} input={<OutlinedInput labelWidth={170} name='isOnlyBigImage' id='isOnlyBigImage'/>}>
                  <MenuItem value=''><em>Är det en bara stor bild</em></MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='true'>Ja</MenuItem>
                  <MenuItem selected classes={{root:'menu-item', selected:'selected'}} value='false'>Nej</MenuItem>
                </Select>
              </FormControl>
              <TextField id="imagePath" name='imagePath'  value={imagePath} onChange={this.handleInputChange('imagePath')} label="imagePath" multiline rows="2" defaultValue="imagePath" variant="outlined" required/>
              <TextField id="bigImagePath" name='bigImagePath'  value={bigImagePath} onChange={this.handleInputChange('bigImagePath')} label="bigImagePath" multiline rows="2" defaultValue="bigImagePath" variant="outlined" />
              <TextField id="icon1" name='icon1'  value={icon1} onChange={this.handleInputChange('icon1')} label="icon1" multiline rows="2" defaultValue="icon1" variant="outlined" />
              <TextField id="icon2" name='icon2'  value={icon2} onChange={this.handleInputChange('icon2')} label="icon2" multiline rows="2" defaultValue="icon2" variant="outlined" />
              <TextField id="icon3" name='icon3'  value={icon3} onChange={this.handleInputChange('icon3')} label="icon3" multiline rows="2" defaultValue="icon3" variant="outlined" />
            </div>
          </div>
          <div className="addDivBTN">
            <StyledButton onClick={this.addProduct}>Lägg till produkt</StyledButton>
            <IconButton className={classes.iconButton} onClick={this.navigateToAdmin}>
              <AssignmentReturnIcon/>
            </IconButton>
          </div>
        </form>
      </Fragment>
    )
  }
}
export default withStyles(styles)(AddProductComponent);
