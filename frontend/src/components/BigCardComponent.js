import React, { Component , Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

// backgroundColor:'#FFF5EE', --->card
const styles = theme => ({
  card: {
    maxWidth: 500,
    Height:500,
  },
  media: {
    height: 500,
  }
});

class BigCardComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image="http://localhost:2000/uploads/storbild1.jpg" title="Contemplative Reptile"/>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(BigCardComponent);
