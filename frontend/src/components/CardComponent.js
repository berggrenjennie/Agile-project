/*
CardComponent is a class component which recive product object as a props
and use to display : image's product, name , descriptions and price.
isSale=true : is a props whis decide if the card has a sale or not.
*/


//core functionality from react.
import React, { Component } from 'react';

//core functionality from material-ui.
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import StarHalfOutlinedIcon from '@material-ui/icons/StarHalfOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

// backgroundColor:'#FFF5EE', --->card
const styles = theme => ({
  card: {
    maxWidth:300,
    color:'#505050',
    marginTop:0,
  },
  chip:{
    marginTop: 8,
    marginLeft: 220,
    backgroundColor:'#908393',
    color:'#FFF5EE',
  },
  avatar:{
    backgroundColor:'#FFF5EE ',
    color:'#908393',
  },
  media: {
    height: 150,
  },
  cartIcon: {
    left: 180,
    top: 0,
    color:'#908393'
  },
  iconButton:{
    color:'#908393'
  }
});

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -2,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor:'#908393',
    color:'#FFF5EE'
  },
}))(Badge);

class CardComponent extends Component {
  render() {
    const { classes , product , isSale } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={product.imagePath} title={product.name}>
            {isSale?
              <Chip className={classes.chip} label={product.salePercent+'%'} avatar={<Avatar className={classes.avatar}>R</Avatar>}/>
            :null}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <Typography variant="h5" component="p">
              {product.price+' kr.'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton className={classes.iconButton} size="small" >
            {/*<FavoriteBorderOutlinedIcon/>*/}
            <FavoriteIcon/>
          </IconButton>
          <IconButton className={classes.iconButton} size="small">
            <StyledBadge badgeContent={product.rating}>
              <StarHalfOutlinedIcon/>
            </StyledBadge>
          </IconButton>
          <IconButton className={classes.cartIcon}size="small">
            <AddShoppingCartOutlinedIcon/>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(CardComponent);
