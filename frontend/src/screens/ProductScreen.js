/*
HomeScreen is a function component which renders two Components:
- CarouselComponent
- SaleProductsComponent
*/

//core functionality from react.
import React , { Fragment } from 'react';
//existing hooks imports.
// import { useFetchProduct } from '../hooks/productsHook';

//existing component imports.
// import CarouselComponent from '../components/CarouselComponent';
// import SaleProductsComponent from '../components/SaleProductsComponent';

export default function ProductScreen(props) {
  // const values = queryString.parse(props.location.search);
  // let category=values.category;
  // let subCategory1=values.subCategory1;
  //fetching products data by category from Bulles-shopDB.
  // const [data, isLoading] =  useFetchProduct('http://localhost:2000/products?category='+category+'&subCategory1='+subCategory1);
  return (
    <div>
        <Fragment>
          ProductScreen
          {/*<CarouselComponent/>*/}
          {/*<SaleProductsComponent saleProducts={saleProductsArray} isLoading={isLoading}/>*/}
        </Fragment>
    </div>
  )
}
