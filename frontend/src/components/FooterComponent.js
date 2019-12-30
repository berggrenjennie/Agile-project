//core functionality from React.
import React, { Component } from 'react';

//CSS imports.
import '../styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class FooterComponent extends Component {
  render() {
    return (
      <div className='footerContainer'>
        <div className='socialMediaIconsContainer'>
          <span className='circle'><i className='fab fa-facebook-f'></i></span>
          <span className='circle'><i className='fab fa-twitter'></i></span>
          <span className='circle'><i className='fab fa-pinterest-p'></i></span>
          <span className='circle'><i className='fab fa-instagram'></i></span>
          <span className='circle'><i className='fab fa-youtube'></i></span>
        </div>
        <div className='footerMenuContainer'>
          <ul>
            <li className='bold'>Kundservice</li>
            <li>-FAQ</li>
            <li>-Storleksguide</li>
            <li>-Returer och byten</li>
            <li>-Frakt</li>
            <li>-Reklamation</li>
            <li>-Glömt ditt lösenord</li>
          </ul>
          <ul>
            <li className='bold'>Om Oss</li>
            <li>-Vårt ansvar</li>
            <li>-Villkor</li>
            <li>-Miljötänk</li>
            <li>-Tillgänglighet</li>
            <li>-Integritet</li>
          </ul>
          <ul>
            <li className='bold'>Kontakta Oss</li>
            <li><i className='fas fa-phone'></i> 08-654 85 90</li>
            <li><i className='fas fa-envelope'></i> hej@bellus.se</li>
            <li><i className='fas fa-map-marker-alt'></i> Framtidsvägen 10A 352 57 Växjö</li>
          </ul>
        </div>
        <div className='copyright'>copyright<i className="far fa-copyright"></i>JFE2020</div>
      </div>
    );
  }
}

export default FooterComponent;
