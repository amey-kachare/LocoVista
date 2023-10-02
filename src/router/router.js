import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from '../pages/home'
import Tours from '../pages/tours'
import TourDetails from '../pages/tourDetails'
import Login from '../pages/login'
import Register from '../pages/register'
import SearchResultList from '../pages/searchResultList'
import Thankyou from '../pages/thankyou';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={< Home/>}/>
        <Route path='/tours' element={< Tours/>}/>
        <Route path='/tours/:id' element={< TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
        <Route path='/thank-you' element={<Thankyou/>}/>
        
    </Routes>
  )
}

export default Router