//core functionality from React.
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//existing admin component imports.
import AdminScreen from './screens/AdminScreen';
import AddProductComponent from './admincomponents/AddProductComponent';

//existing component imports.
import NavigationComponent from './components/NavigationComponent';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProductScreen from './screens/ProductScreen';
import FooterComponent from './components/FooterComponent';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <NavigationComponent/>
        <Route exact path="/admin" component={AdminScreen} />
        <Route path="/addProduct" component={AddProductComponent} />
        <Route exact path="/" component={HomeScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/productCategory" component={CategoryScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <FooterComponent/>
      </Router>
      </div>
    );
  }
}
export default App;
