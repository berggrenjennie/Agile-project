//core functionality from React.
import React from 'react';
import { NavLink } from 'react-router-dom';
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

/*this component shows different links on the website that the user can visit*/
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({ left: false });
  const [category,setCategory]= React.useState('');

  const toggleDrawer = (side, open ,categoryName) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setCategory(categoryName);
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div className='list' role='presentation' onClick={toggleDrawer(side, false , '')} onKeyDown={toggleDrawer(side, false , '')}>
      <List>
          <ListItem className='listCategory'>{category}</ListItem>
          <ListItem>Visa allt <i className='fas fa-sort-down'></i></ListItem>
          <ListItem><NavLink to={"/productCategory?category="+category+"&subCategory1=Överdelar"}>Överdelar</NavLink> <i className='fas fa-sort-down'></i></ListItem>
          <ListItem><NavLink to={"/productCategory?category="+category+"&subCategory1=Nederdelar"}>Nederdelar</NavLink><i className='fas fa-sort-down'></i></ListItem>
          <ListItem><NavLink to={"/productCategory?category="+category+"&subCategory1=Jumpsuits"}>Jumpsuits</NavLink></ListItem>
          <ListItem><NavLink to={"/productCategory?category="+category+"&subCategory1=Ytterkläder"}>Ytterkläder</NavLink><i className='fas fa-sort-down'></i></ListItem>
          <ListItem><NavLink to={"/productCategory?category="+category+"&subCategory1=Festkläder"}>Festkläder</NavLink></ListItem>
          <ListItem><NavLink to={"/productCategory?category="+category+"&subCategory1=Nattkläder"}>Nattkläder</NavLink></ListItem>
          <ListItem><NavLink to={"/productCategory?category="+category+"&subCategory1=Accesoarer"}>Accesoarer</NavLink></ListItem>
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
        <NavLink to={"/home"}><img className='bellusLogo' src={logo} alt='Bellus Logo'/></NavLink>
          <form>
            <input type='text' placeholder='Sök produkter' name='search'/>
              <button type='submit'><i className='fa fa-search'></i></button>
          </form>
      </div>
      <Button>Nyheter</Button>
      <Button onClick={toggleDrawer('left', true,'Pojke')}>Pojke</Button>
      <Button onClick={toggleDrawer('left', true,'Flicka')}>Flicka</Button>
      <Button onClick={toggleDrawer('left', true,'Neutral')}>Neutral</Button>
      <Button>Rea</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)} BackdropProps={{invisible: true}}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
