//core functionality from React.
import React, { Component } from 'react';

//CSS imports.
import '../styles/Carousel.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//core functionality from mdbreact & material ui.
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from 'mdbreact';
import Button from '@material-ui/core/Button';

//image imports.
import heroImg1 from '../images/hero1.jpg';
import heroImg2 from '../images/hero2.jpg';
import heroImg3 from '../images/hero3.jpg';

/* this component is a carousel that displays three commercial pictures to catch the attention of the user*/
class CarouselComponent extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCarousel className='carousel' activeItem={1} length={3} showControls={true} showIndicators={true}>
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img className='carouselImg' src={heroImg1} alt={heroImg1}/>
              </MDBView>
              <MDBCarouselCaption className='heroCaption'>
                <p className='heading headingSlide1'>"Jag låg bredvid dig, tittade på dig och tänkte att du är det finaste jag har"</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img className='carouselImg' src={heroImg2} alt={heroImg2}/>
              </MDBView>
              <MDBCarouselCaption className='heroCaption'>
                <p className='heading headingSlide2'>Upptäck våra senaste bebiskläder i mjuk ekologisk bomull</p>
                <Button className='shoppa flicka'>Shoppa Flicka</Button>
                <Button className='shoppa pojke'>Shoppa Pojke</Button>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img className='carouselImg' src={heroImg3} alt={heroImg3}/>
              </MDBView>
              <MDBCarouselCaption className='heroCaption'>
                <p className='heading headingSlide3'><span className='bigNumber'>3</span> för <span className='bigNumber'>2</span><span className='newLine'>på alla bodies</span></p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default CarouselComponent;
