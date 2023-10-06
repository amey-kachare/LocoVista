import React from 'react'
import './home.css'
import {Container, Row, Col} from 'reactstrap'
import gallery1 from '../assets/images/gallery1.jpg'
import gallery2 from '../assets/images/gallery2.jpg'
import galleryVideo from '../assets/images/galleryVideo.mp4'
import Subtitle from './../shared/subtitle'
import SearchBar from '../shared/searchbar'
import ServicesList from '../services/servicesList'
import FeaturedTourList from '../featuredTour/featuredTourList'
import expImg from '../assets/images/exp.jpg'
import Reviews from '../components/reviews/reviews'
const Home = () => {
  return (
    <>
    {/*Home Page Section */}
     <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="home_content">
              <div className="home_subtitle d-flex align-items-center">
                <Subtitle subtitle={"Speed before starting your adventure  "}/>
              </div>  
              <h1><span className='highlight'>LocoVista :</span> Building Memories Across the Globe</h1>
              <p>Discover the world with Locovista! 🌍 Explore breathtaking destinations, savor unique cultures, and create memories that will last a lifetime. Whether you crave adventure or seek relaxation, Locovista has the perfect getaway for you. Start your journey today and unlock the beauty of our diverse planet. #LocovistaAdventures 🗺️✈️</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="gallery_img-box">
              <img src={gallery1} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="gallery_img-box mt-4">
              <video src={galleryVideo} alt="" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="gallery_img-box mt-5">
              <img src={gallery2} alt="" />
            </div>
            
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
 

   {/*Our Service Section */}
    <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h2 className='services_title'>We offer our best Services</h2>
            </Col>
            <ServicesList/>
          </Row>
        </Container>
    </section>

    {/*Featured Tour */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className='featuredTourTile'>Our Featured Tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>

      {/*Experience Section */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience_content">
                <Subtitle subtitle={'Experience'}/>
                <h2>With all your experience <br/> we will serve you</h2>
                <p>Lorem ipsum dolor sit, amet <br/>consectetur adipisicing elit. Inventore dicta consectetur natus.</p>
              </div>
              <div className="counter_wrpper d-flex align-items-center gap-5">
                <div className="counterBox">
                  <span>95+</span>
                  <h6>Successfull Trips</h6>
                </div>
                <div className="counterBox">
                  <span>68+</span>
                  <h6>Regular Clients </h6>
                </div>
                <div className="counterBox">
                  <span>3</span>
                  <h6>years of experience</h6>
                </div>             
              </div>
            </Col>
            <Col lg='6'>
              <div className="expimg">
                <img src={expImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*Reviews Section*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={"Our Clients"}/>
              <h2 className='test_title'>What our Clients say about us :</h2>
              <Reviews/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home
