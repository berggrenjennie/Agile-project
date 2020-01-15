//core functionality from react.
import React , { Fragment } from 'react';
//existing hooks imports.
import { useFetchProduct } from '../hooks/productsHook';

//existing component imports.
import AdminComponent from '../admincomponents/AdminComponent';

//core functionality from material-ui.
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
//CSS imports.
import '../styles/Admin.css';

const useStyles = makeStyles(theme => ({
  progress: {
    color: '#908393'
  }
}));

/*AdminScreen is a function component which renders AdminComponent.*/
export default function AdminScreen(props) {
  function navigateToAddProductComponent(e) {
    props.history.push('/addProduct');
    e.preventDefault();
  }
    //fetching products data by category from the database
  const [data, isLoading] =  useFetchProduct('http://localhost:2000/products');
  const classes = useStyles();
  return (
    <div>
      {!isLoading?
        <Fragment>
          <h2 className="produkterHeader">Produkter</h2>
          <AdminComponent productsData={data} permission="admin"/>
          <div className="addDivBTN">
            <button className="addBTN" onClick={navigateToAddProductComponent}>Lägg till en ny produkt</button>
          </div>
        </Fragment>
        : <Fragment>
            <span className='loading'><CircularProgress className={classes.progress}/></span>
          </Fragment>
      }
    </div>
  )
}
