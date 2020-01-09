//core functionality from React.
import React, { Component } from 'react';

//CSS imports.
import '../styles/Commercial.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

//image imports.
import commercialImg from '../images/commercial1.jpg';
import logoNoTextImg from '../images/logoNoText.jpg';
import paymentImg from '../images/payment.png';

class CommercialComponent extends Component {
  render() {
    return (
      <div>
        <div className='commercialContainer'>
          <div className='newsletterDiv'>
            <img className='logoImg' src={logoNoTextImg} alt='BellusLogo'/>
            <span className='Bellus'>Bellus</span>
            <p className='nyhetsbrevP'>Nyhetsbrev</p>
            <form>
                <i className="far fa-envelope"></i>
                <input type='email' placeholder='Email'/>
            </form>
            <p>Anmäl</p>
          </div>
          <div className='commercialDiv'>
            <img className='commercialImg' src={commercialImg} alt='commercial'/>
            <p>Behöver din baby nya kläder? - köp dem hos oss!</p>
          </div>
        </div>
        <img className='payment' src={paymentImg} alt='payment options'/>
      </div>
    );
  }
}

export default CommercialComponent;