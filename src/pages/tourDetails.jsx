import React,{useRef,useState} from 'react'
import './tourDetails.css'
import avatar from '../assets/images/avatar.jpg'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utills/avgRating'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Form ,ListGroup } from 'reactstrap'
import Booking from '../components/booking/booking'
const TourDetails = () => {

  const {id}= useParams();
  const reviewMsgref = useRef('')
  const [tourRating, setTourRating]=useState(null)
  const tour =tourData.find(tour=>tour.id===id)
  const {photo,title, address, desc, price, reviews,city,distance,maxGroupSize}=tour
  const {totalRating,avgRating}=calculateAvgRating(reviews);
  const submitHandler=e=>{
    e.preventDefault()
    const reviewText= reviewMsgref.current.value
    
    alert(`${reviewText},${tourRating}`);
  }
  
  return (
    
    <section>
      <Container>
        <Row>
          <Col lg='8'>
          <div className="tourContent">
            <img src={photo} alt="" />
          </div>
          <div className="tourInfo">
            <h2>{title}</h2>
            <div className="d-flex align-items-center gap-5">
            <span className='tourRating d-flex align-items-center gap-1'>
            <i class="ri-star-line" style={{color:"var(--secondary-color)"}}></i>
            {avgRating===0 ? null : avgRating} 
            {totalRating===0 ? 'Not Rated' : (<span>({reviews.length})</span>)}
            </span>
            <span><i class="ri-map-pin-line"></i>{address}
            </span>
            </div>
            <div className="extraDetails">
            <span><i class="ri-map-pin-line"></i>{city}
            </span>
            <span><i class="ri-pin-distance-line"></i>{distance} k/m
            </span>
            <span><i class="ri-money-dollar-box-line"></i>₹{price} /person
            </span>
            <span><i class="ri-group-line"></i>{maxGroupSize} people
            </span>
            </div>
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
          <div className="tourReviews  mt-4">
            <h4>Reviews ({reviews?.length} reviews)</h4>
            <Form onSubmit={submitHandler}>
              <div className="ratingGroup d-flex align-items-center gap-3 mt-4  ">
                <span onClick={()=> setTourRating(1)}>
                1 <i class="ri-star-fill"></i>
                </span>
                <span onClick={()=> setTourRating(2)}>
                2 <i class="ri-star-fill"></i>
                </span>
                <span onClick={()=> setTourRating(3)}> 
                3 <i class="ri-star-fill"></i>
                </span>
                <span onClick={()=> setTourRating(4)}>
                4 <i class="ri-star-fill"></i>
                </span>
                <span onClick={()=> setTourRating(5)}>
                5 <i class="ri-star-fill"></i>
                </span>
              </div>
              <div className="reviewInput">
                <input type="text" ref={reviewMsgref} placeholder=' Share your thoughts :' required/>
                <button className='btn primary_btn text-white'>
                  Submit
                </button>
              </div>
            </Form>
            <ListGroup className='userReview'>
              {
                reviews?.map(reviews=>(
                  <>
                  <div className="reviewItem">
                   <img src={avatar} alt="" />
                  <div className="w-100">
                   <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h5>Virat Kohli</h5>
                      <p>28/09/2023</p>
                    </div>
                    <span className="d-flex align-items-center">
                      5<i class="ri-star-fill"></i>
                    </span>
                   </div>
                   <h6>Amazing Tour</h6>
                  </div>
                  </div>
                      <div className="reviewItem">
                      <img src={avatar} alt="" />
                     <div className="w-100">
                      <div className="d-flex align-items-center justify-content-between">
                       <div>
                         <h5>Vamika Kohli</h5>
                         <p>29/09/2023</p>
                       </div>
                       <span className="d-flex align-items-center">
                         4.5<i class="ri-star-fill"></i>
                       </span>
                      </div>
                      <h6>Amazing Experience</h6>
                     </div>
                     </div>
                     </>
                ))
              }
            </ListGroup>
          </div>
          </Col>
          <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
      </Container>
    </section>
    
  )
}

export default TourDetails
