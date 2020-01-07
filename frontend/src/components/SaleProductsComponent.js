//core functionality from react.
import React, { Component , Fragment } from 'react';

//core functionality from material-ui.
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

//existing component imports.
import CardComponent from './CardComponent';

//CSS imports.
import '../styles/SaleProducts.css';

const styles = theme => ({
  card: {
    maxWidth: 500,
    Height:500,
  },
  media: {
    height: 500,
  },
  progress: {
    margin: theme.spacing(2),
    color: '#908393'
  }
});

class SaleProductsComponent extends Component {
  render() {
    const { classes , saleProducts , isLoading } = this.props;
    return (
      <Fragment>
      {!isLoading?
        <Fragment>
          <h2 className="saleHeader">REA</h2>
          <div className="saleProductsContainer">
            {saleProducts.map((product, index) =>
              <div key={index}><CardComponent isSale={true}  product={product}/></div>
            )}
          </div>
        </Fragment>
        : <Fragment>
            <span className='loading'><CircularProgress className={classes.progress}/></span>
          </Fragment>
      }
      </Fragment>
    );
  }
}

export default withStyles(styles)(SaleProductsComponent);
