import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from '../pages/home'
import Tours from '../pages/tours'
import TourDetails from '../pages/tourDetails'
import Login from '../pages/login'
import Register from '../pages/register'
import SerchResultList from '../pages/searchResultList'
import Thankyou from '../pages/thankyou';
import Urgent from '../pages/urgent'
import Emergency from '../pages/emergency'
import About from '../pages/about'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={< Home/>}/>
        
        <Route path='/tours' element={< Tours/>}/>
        <Route path='/tours/:id' element={< TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tours/search' element={<SerchResultList/>}/>
        <Route path='/thank-you' element={<Thankyou/>}/>
        <Route path='/about' element={< About/>}/>
        <Route path='/emergency' element={< Emergency/>}/>
        <Route path='/urgent' element={< Urgent/>}/>
        
    </Routes>
  )
}

export default Router