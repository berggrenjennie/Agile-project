//core functionality from react.
import React , { Fragment } from 'react';
//existing hooks imports.
import { useFetchProduct } from '../hooks/productsHook';

//existing component imports.
import ProductComponent from '../components/ProductComponent';
import CommercialComponent from '../components/CommercialComponent';

/*
ProductScreen is a function component which renders two Components:
- ProductComponent
- CommercialComponent
*/
export default function ProductScreen(props) {
  //fetching product data by id from the database..
  const productId=props.match.params.id;
  const [data, isLoading] =  useFetchProduct('http://localhost:2000/products/'+productId);
  return (
    <div>
        <Fragment>
          <ProductComponent product={data} isLoading={isLoading}/>
          <CommercialComponent/>
        </Fragment>
    </div>
  )
}
