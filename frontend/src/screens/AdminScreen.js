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

//CSS imports.
import '../styles/Admin.css';

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
  return (
    <div>
      {data.length>0?
        <Fragment>
          <h2>Products</h2>
          <AdminComponent productsData={data} isLoading={isLoading} permission="admin"/>
          <div className="addDivBTN">
            <StyledButton onClick={navigateToAddProductComponent}>Add new product</StyledButton>
          </div>
        </Fragment>
      :null}
    </div>
  )
}
