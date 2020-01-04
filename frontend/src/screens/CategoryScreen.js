/*
HomeScreen is a function component which renders two Components:
- CarouselComponent
- SaleProductsComponent
*/

//core functionality from react.
import React , { Fragment } from 'react';
//existing hooks imports.
import { useFetchProduct } from '../hooks/productsHook';

//existing component imports.
import CarouselComponent from '../components/CarouselComponent';
import SaleProductsComponent from '../components/SaleProductsComponent';

export default function HomeScreen(props) {
  //fetching products data  from Bulles-shopDB.
  const [data, isLoading] =  useFetchProduct('http://localhost:2000/products');
  //get the first 8 products which have sale.
  const saleProductsArray=data.filter((product,index) => (index < 8 && product.isSale ===true));
  return (
    <div>
        <Fragment>
          <CarouselComponent/>
          <SaleProductsComponent saleProducts={saleProductsArray} isLoading={isLoading}/>
        </Fragment>
    </div>
  )
}
