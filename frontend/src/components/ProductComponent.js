//core functionality from react.
import React, { Component , Fragment } from 'react';

//core functionality from material-ui.
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ZoomInOutlinedIcon from '@material-ui/icons/ZoomInOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from 'mdbreact';

//CSS imports.
import '../styles/Product.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth:1000,
    marginTop:50,
    margin:'auto',
  },
  paperRight: {
    padding: theme.spacing(5),
    textAlign: 'left',
  },
  paperLeft: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  productDescription:{
    marginTop: 10,
    marginBottom: 15,
    color:'#505050',
    fontSize:18
  },
  formControls: {
    margin: theme.spacing(1),
    width:350,
    marginBottom: 30,
    marginLeft: -2,
  },
  selectEmptys: {
    marginTop: theme.spacing(2)
  },
  widths: {
    maxWidth: '18em',
    backgroundColor: 'white',
  },
  price:{
    fontSize:40,
    color:'#908393',
    marginBottom: 30,
  },
  card: {
    maxWidth: 300,
    Height:400,
  },
  media: {
    height: 400,
    border: '1px solid #908393'
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  chip:{
    marginTop: 8,
    marginLeft: 300,
    backgroundColor:'#908393',
    color:'#FFF5EE',
  },
  iconButton:{
    color:'#908393',
    top:338,
    left:155,
  },
  closeIconButton:{
    color:'#908393',
  },
  progress: {
    margin: theme.spacing(2),
    color: '#908393'
  }
});

/*this component shows information about the product the user has selected. It is possible to zoom in to see the image and its different colors*/
class ProductsComponent extends Component {
  constructor(){
    super();
    this.state = {
        imageIndex:0,
        id:'',
        size: '',
        color: '',
        open:false,
    }
  }
  //handeles all the input field data changes from form and updates the size and color states.
  handleInputChange = field => event => {
    const state = {};
    state[field] = event.target.value;
    this.setState(state);
  }
  // changes the index of the image array and this will change the image in the  big card.
  changeImage(index){
    this.setState({ imageIndex : index });
  }

  // opens the dialog component from material UI and shows the product's image in a big size.
  openZoomProduct= () => {
    this.setState({ open : true});
  }
  // closes the  dialog component from material UI.
  closeZoomProduct= () => {
    this.setState({ open : false});
  }

  // this function will send selectedObj to another component which handles the cart of the customer.
  addToCart = event => {
    event.preventDefault();
    const selectedObj = {
      id:this.props.product._id,
      size: this.state.size,
      color: this.state.color
    }
  }

  render() {
    const { classes , product , isLoading } = this.props;
    const { imageIndex , size, color , open } = this.state;
    const images = [product.icon1,product.icon2,product.icon3];
    let colors,sizes =[];
    if (product.color) colors = product.color.split(" , ");
    if (product.size)  sizes = product.size.split(" , ");

    return (
      <Fragment>
      {!isLoading?
        <Fragment>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <Paper className={classes.paperLeft}>
                <CardMedia className={classes.media} image={images[imageIndex]} title={product.name}>
                  {product.isSale?
                    <Chip className={classes.chip} label={product.salePercent+'%'}/>
                  :null}
                  <IconButton className={classes.iconButton} onClick={this.openZoomProduct}>
                    <ZoomInOutlinedIcon fontSize="large"/>
                  </IconButton>
                </CardMedia>
              <Box className="iconsContainer">
                {images.map((img,index) => {
                  return(
                    <div key={index}>
                      <Avatar alt={'image' + index+1}  src={img} variant="square" className={classes.large} onClick={(e) => this.changeImage(index, e)}/>
                    </div>
                  )
                })}
              </Box>
              </Paper>
            </Grid>
          <Grid item xs={7}>
            <Paper className={classes.paperRight}>
              <form className={classes.roots} autoComplete='off'>
                <Box className="ratningContainer">
                  <div><Typography variant="h4" component="h2">{product.name}</Typography></div>
                  <div><Rating name="read-only" value={product.rating} readOnly /></div>
                </Box>
                <Typography className={classes.productDescription} component="p">
                  {product.description}
                </Typography>
                <FormControl variant='outlined' className={classes.formControls}>
                  <TextField className={classes.widths} id="material" label="Material" defaultValue={product.material} variant="outlined" InputProps={{readOnly: true }}/>
                </FormControl>
                <FormControl variant='outlined' className={classes.formControls}>
                  <InputLabel htmlFor='size'>Size</InputLabel>
                  <Select className={classes.widths} value={size} onChange={this.handleInputChange('size')} input={<OutlinedInput labelWidth={40} name='size' id='size'/>}>
                    <MenuItem  value=''><em>Alla Storlekar</em></MenuItem>
                    {sizes.map((sizeNumber,index) => {
                      return(
                        <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={index} value={sizeNumber}>{sizeNumber}</MenuItem>
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
                        <MenuItem selected classes={{root:'menu-item', selected:'selected'}} key={index} value={colorName}>{colorName}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
                <Typography variant="h3" component="p" className={classes.price}>
                  {product.price+' kr.'}
                </Typography>
                <div className="addDivBTN">
                  <button className='addBTN' onClick={this.addToCart}>Lägg i kundvagen</button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Dialog open={open} onClose={this.closeZoomProduct} aria-labelledby={product.name}>
        <Box className="dialogContainer">
          <div><DialogTitle id={product.name}>{product.name}</DialogTitle></div>
          <div>
            <DialogActions>
              <IconButton className={classes.closeIconButton} onClick={this.closeZoomProduct}>
                <HighlightOffOutlinedIcon/>
              </IconButton>
            </DialogActions>
          </div>
        </Box>
        <DialogContent >
          <MDBContainer className='dialogCarousel'>
            <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true}>
              <MDBCarouselInner>
                {images.map((img,index) => {
                  return(
                      <MDBCarouselItem itemId={index+1} key={index} >
                        <MDBView>
                          <img className='dialogCarouselImg' src={img} alt={'image' + index+1} />
                        </MDBView>
                      </MDBCarouselItem>
                  )
                })}
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </DialogContent>
      </Dialog>
    </Fragment>
    : <Fragment>
        <span className='loading'><CircularProgress className={classes.progress}/></span>
      </Fragment>
      }
      </Fragment>
    );
  }
}

export default withStyles(styles)(ProductsComponent);
