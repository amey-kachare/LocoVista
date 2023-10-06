import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import expImg from '../assets/images/exp.jpg'
import Subtitle from '../shared/subtitle'
import ServicesList from '../services/servicesList'
const About = () => {
  return <>
     <section>
     <Container>
       <Row>
         <Col lg='6'>
           <div className="experience_content gap-5">
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
   <section>
        <Container>
          <Row>
            <Col lg='3'>
            <Subtitle subtitle={'Our Services'}/>
              <h2 className='services_title '>We offer our best Services</h2>
            </Col>
            <ServicesList/>
          </Row>
        </Container>
    </section>
  </>
}

export default About
