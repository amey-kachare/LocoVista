import React,{useContext, useState} from 'react'
import './login.css'
import Slider from "react-slick"
import {Container ,Row, Col, Form, FormGroup,Button} from "reactstrap"
import {Link,useNavigate} from 'react-router-dom'
import loginImg from '../assets/images/login.jpg'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../components/context/AuthContext'
import { BASE_URL } from '../utills/config'
const Register = () => {

  const [credentials,setCredentials]=useState({
  username:undefined, 
  email:undefined,
  password:undefined
})

  const {dispatch}=useContext(AuthContext)
  const navigate=useNavigate()

  const handleChange = e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
}
const handleClick = async e =>{
  e.preventDefault();
  try {
    const res=await fetch(`${BASE_URL}/auth/register`,{
      method:"post",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(credentials),
    });

    const result=await res.json();
    if(!res.ok){
      alert (result.message);
    }
    console.log(result.data);
    dispatch({type:"REGISTER_SUCCESS"});
    navigate('/login');
  } catch (err) {
    alert(err.message);
  }
}
const settings={
  dots:false,
  Infinite:true,
  autoplay:false,
  speed:500,
  swipeToSlide:true,
  autoplaySpeed:2000,
  slidestoShow:3,

  responsive:
  [
      {
          breakpoint:992,
          settings:{
              slidestoShow:2,
              slidesToScroll:1,
              infinite:true,
              dots:true,
          },
      },
      {
          breakpoint:576,
          settings:{
              slidestoShow:1,
              slidesToScroll:1,
              
          },
      },
  ]
}

  return <>
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="loginContainer d-flex justify-content-between">
            <div className="loginImg">
              <img src={loginImg} alt="" />
            </div>
            <div className="loginForm">
              <div className="user">
              <img src={userIcon} alt="" />
              </div>
              <h2>Register </h2> 
              <Slider {...settings}>
    <div className="reviews py-4 px-3">
    
    <div className="d-flex align-items-center justify-content-center gap-4 ">
          
                <h5 className='mb-0 mt-0 rounded-2'>User</h5>
               
        </div>
    </div>
    <div className="reviews py-4 px-3">
        
        <div className="d-flex align-items-center justify-content-center gap-4 ">
           
            <div>
                <h5 className='mb-0 mt-0  rounded-2'>Guide</h5>
               
            </div>
        </div>
    </div>
    <div className="reviews py-4 px-3">
    <div className="d-flex align-items-center justify-content-center gap-4 ">
    <h5 className='mb-0 mt-0  rounded-2'>Business</h5>
               
        </div>
    </div>
   
            </Slider>
              <Form onSubmit={handleClick}>
              <FormGroup>
                <input type="text" placeholder='Username' required id='username' onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                <input type="email" placeholder='Email' required id='email' onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                <input type="password" placeholder='Password' required id='password' onChange={handleChange}/>
              </FormGroup>
              <Button className='btn secondary_btn auth_btn' type='submit' >Register<Link to='/login3'></Link></Button>
            </Form>
            <p>Already have an account ?<Link to='/login' >Login</Link></p>
          
            </div>
            </div>
            </Col>
           
        </Row>
      </Container>
    </section>
  </>
}

export default Register