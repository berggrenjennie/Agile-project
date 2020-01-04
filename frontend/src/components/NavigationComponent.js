//core functionality from React.
import React from 'react';

//core functionality from material-ui.
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//CSS imports.
import '../styles/Navigation.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

//image imports.
import logo from '../images/logo.jpg';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div className='list' role='presentation' onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
      <List>
          <ListItem className='listCategory'>FLICKA</ListItem>
          <ListItem>Visa allt <i className='fas fa-sort-down'></i></ListItem>
          <ListItem>Överdelar <i className='fas fa-sort-down'></i></ListItem>
          <ListItem>Nederdelar <i className='fas fa-sort-down'></i></ListItem>
          <ListItem>Jumpsuits</ListItem>
          <ListItem>Ytterkläder <i className='fas fa-sort-down'></i></ListItem>
          <ListItem>Festkläder</ListItem>
          <ListItem>Nattkläder</ListItem>
          <ListItem>Accesoarer</ListItem>
          <ListItem>Rea</ListItem>
      </List>
    </div>
  );

  return (
    <div className='navigationContainer'>
      <div className='navigationIcons'>
        <i className='fas fa-shopping-cart'></i>
        <i className='fas fa-globe'></i>
        <i className='fas fa-map-marker-alt'></i>
        <i className='fas fa-user'></i>
      </div>
      <div className='logoContainer'>
        <img className='bellusLogo' src={logo} alt='Bellus Logo'/>
          <form>
            <input type='text' placeholder='Sök produkter' name='search'/>
              <button type='submit'><i className='fa fa-search'></i></button>
          </form>
      </div>
      <Button>Nyheter</Button>
      <Button>Pojke</Button>
      <Button onMouseOver={toggleDrawer('left', true)}>Flicka</Button>
      <Button>Neutral</Button>
      <Button>Rea</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)} BackdropProps={{invisible: true}}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
