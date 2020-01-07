import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

// backgroundColor:'#FFF5EE', --->card
const styles = theme => ({
  card: {
    maxWidth: 900,
    Height:500,
    marginTop:0,
  },
  media: {
    height: 500,
  }
});

class BigCardComponent extends Component {
  render() {
    const { classes , bigImages , index } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
        {(bigImages[index])?
          <CardMedia className={classes.media} image={bigImages[index].bigImagePath } title="Contemplative Reptile"/>
        :null}
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(BigCardComponent);
