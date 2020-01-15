//core functionality from react.
import React, { Component , Fragment } from 'react';

//core functionality from material-ui.
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";

//existing component imports.
import CardComponent from './CardComponent';
import BigCardComponent from './BigCardComponent';

//CSS imports.
import '../styles/CategoryProducts.css';

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

const theme = createMuiTheme();

/*this component shows all product cards related to the category that the user has selected.*/
class CategoryProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0 ,
      productsPerPage:6,
    };
  }

  handleClick(page) {
    this.setState({ page });
  }

  /*a function which calculates the total pages for the table pagination*/
  calculateTotalPages = x => {
    let remainder = x % this.state.productsPerPage;
    let total = 0;
    let pages = 0;
    if (remainder === 0) {
      total = x / this.state.productsPerPage;
    } else {
      pages = (x - remainder) / this.state.productsPerPage;
      total = pages;
    }
    return total;
  }

  render() {
    const { productsPerPage , page }=this.state
    const { classes , products , isLoading , isFilter} = this.props;
    const bigImages = products.filter((product,index) => (product.isOnlyBigImage ===true));
    return (
      <Fragment>
      {!isLoading?
        <Fragment>
          <div className="CategoryProductsContainer">
            {products.slice(page * productsPerPage, page * productsPerPage + productsPerPage).map((product, index) => {
              if((!isFilter && index === 2) ||  product.isOnlyBigImage){
                return (<div className="bigCard" key={index}><BigCardComponent index={page} bigImages={bigImages}/></div>)
              }
              return (<div className="normalCard" key={index}><CardComponent isbig={product.isOnlyBigImage} product={product}/></div>)
            })}
          </div>
          <div className="pagination">
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <Pagination
                limit={1}
                offset={this.state.page}
                total={this.calculateTotalPages(products.length)}
                onClick={(e, page) => this.handleClick(page)}
              />
            </MuiThemeProvider>
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

export default withStyles(styles)(CategoryProductsComponent);
