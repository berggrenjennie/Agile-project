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
import '../styles/CategoryProducts.css';

/*
CategryScreen is a function component which renders two Components:
- FilterComponent
- CategoryProductsComponent
*/
export default function CategryScreen(props) {
  const values = queryString.parse(props.location.search);
  let category=values.category;
  let subCategory1=values.subCategory1;
  //fetching products data by category from the database
  const [data, isLoading] =  useFetchProduct('http://localhost:2000/products?category='+category+'&subCategory1='+subCategory1);
  const [fiteredProducts,setFiteredProducts] = useState([]);

  /*a function that filters products based on the  users selected values*/
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
  let isFilter=false;
  if (fiteredProducts.length >0){
    productArray=fiteredProducts;
    isFilter=true;
  } else{
    productArray=data;
  }
  return (
    <div className="MainContainer">
        <Fragment>
          <div className="filterContainer">
            <div><h2 className="Header">{category +' - '+ subCategory1}</h2></div>
            <div><FilterComponent onFilter={onFilter}/></div>
          </div>
          <CategoryProductsComponent products={productArray} isLoading={isLoading} isFilter={isFilter} />
        </Fragment>
    </div>
  )
}
