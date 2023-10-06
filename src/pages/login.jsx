import React,{useState} from 'react'
import './login.css'
import {Container ,Row, Col, Form, FormGroup,Button} from "reactstrap"
import {Link} from 'react-router-dom'
import loginImg from '../assets/images/login.jpg'
import userIcon from '../assets/images/user.png'
const Login = () => {
  const [setCredentials]=useState({
   email:undefined,
   password:undefined
})
  const handleChange = e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
}
const handleClick = e =>{
  e.preventDefault();
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
              <h2>Login</h2> 
              <Form onSubmit={handleClick}>
              <FormGroup>
                <input type="email" placeholder='Email' required id='email' onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                <input type="password" placeholder='Password' required id='password' onChange={handleChange}/>
              </FormGroup>
              <Button className='btn secondary_btn auth_btn' type='submit'>Login</Button>
            </Form>
            <p>Don't have an account?<Link to='/register' >Create</Link></p>
          
            </div>
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  </>
}

export default Login
