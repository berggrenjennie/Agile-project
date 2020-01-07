   /*
HomeScreen is a function component which renders two Components:
- CarouselComponent
- SaleProductsComponent
*/

//core functionality from react.
import React , { Fragment } from 'react';
import { useState } from 'react';
import queryString from 'query-string';
//existing hooks imports.
import { useFetchProduct } from '../hooks/productsHook';

//existing component imports.
import FilterComponent from '../components/FilterComponent';
import CategoryProductsComponent from '../components/CategoryProductsComponent';

//CSS imports.
import '../styles/SaleProducts.css';

export default function CategryScreen(props) {

  const values = queryString.parse(props.location.search);
  let category=values.category;
  let subCategory1=values.subCategory1;
  //fetching products data by category from Bulles-shopDB.
  const [data, isLoading] =  useFetchProduct('http://localhost:2000/products?category='+category+'&subCategory1='+subCategory1);
  const [fiteredProducts,setFiteredProducts] = useState([]);
  let productObj={};
  function onFilter(selectedObj) {
    const filteredArray = data.filter(product => {
          const productObj = {
            size:(product.size.split(" , ")).filter(item => item === selectedObj.size),
            material:product.material,
            color:(product.color.split(" , ")).find(item => item === selectedObj.color)
          }
          console.log("productObj",productObj);
          return Object.entries(productObj).every(([key, value]) => !selectedObj[key] || selectedObj[key] === value)
    })
    setFiteredProducts(filteredArray);
  }
  let productArray=[];
  (fiteredProducts.length >0)? productArray=fiteredProducts : productArray=data;
  return (
    <div className="MainContainer">
        <Fragment>
          <FilterComponent onFilter={onFilter}/>
          <CategoryProductsComponent products={productArray} isLoading={isLoading} category={category} subCategory1={subCategory1}/>
        </Fragment>
    </div>
  )
}
