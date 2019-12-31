//core functionality from React.
import React, { Component } from 'react';
//existing component imports.
import NavigationComponent from './components/NavigationComponent';
import CarouselComponent from './components/CarouselComponent';
import FooterComponent from './components/FooterComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationComponent/>
        <CarouselComponent/>
        <FooterComponent/>
      </div>
    );
  }
}
export default App;
