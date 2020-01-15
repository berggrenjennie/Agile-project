//core functionality from react.
import React , { Fragment } from 'react';
//existing hooks imports.
import { useFetchProduct } from '../hooks/productsHook';

//existing component imports.
import CarouselComponent from '../components/CarouselComponent';
import SaleProductsComponent from '../components/SaleProductsComponent';

/*
HomeScreen is a function component which renders two Components:
- CarouselComponent
- SaleProductsComponent
*/
export default function HomeScreen(props) {
  //fetching products data  from the database.
  const [data, isLoading] =  useFetchProduct('http://localhost:2000/products');
  //gets all products which are on sale and not use it as a big image.
  const saleProductsArray=data.filter((product,index) => (product.isSale ===true && product.isOnlyBigImage ===false));
  //gets the first 8 products which are on sale.
  const saleProducts=saleProductsArray.filter((product,index) => (index < 8));
  return (
    <div>
        <Fragment>
          <CarouselComponent/>
          <SaleProductsComponent saleProducts={saleProducts} isLoading={isLoading}/>
        </Fragment>
    </div>
  )
}
