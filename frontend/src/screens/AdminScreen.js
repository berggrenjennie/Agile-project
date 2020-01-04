/*
AdminScreen is a function component which renders AdminComponent.
*/

//core functionality from react.
import React , { Fragment } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
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

export default function AdminScreen(props) {
  function navigateToAddProductComponent(e) {
    props.history.push('/addProduct');
    e.preventDefault();
  }
  //fetching products data  from Bulles-shopDB.
  const [data, isLoading] =  useFetchProduct('http://localhost:2000/products');
  const classes = useStyles();
  return (
    <div>
      {!isLoading?
        <Fragment>
          <h2>Produkter</h2>
          <AdminComponent productsData={data} permission="admin"/>
          <div className="addDivBTN">
            <StyledButton onClick={navigateToAddProductComponent}>Lägg till en ny produkt</StyledButton>
          </div>
        </Fragment>
        : <Fragment>
            <span className='loading'><CircularProgress className={classes.progress}/></span>
          </Fragment>
      }
    </div>
  )
}
