import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import Auth from '../Pages/Auth/Auth'
import Home from '../Pages/Home/Home';
import Questions from '../Pages/Questions/Questions';
import AskQuestion from '../Pages/AskQuestion/AskQuestion';
import DisplayQuestion from '../Pages/DisplayQuestion/DisplayQuestion';
import Tags from '../Pages/Tags/Tags';
import Users from '../Pages/Users/Users';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';


const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/auth' element={<Auth />} />
            <Route exact path='/Question' element={<Questions />} />
            <Route exact path='/AskQuestion' element={<AskQuestion />} />
            <Route exact path='/Question/:id' element={<DisplayQuestion />} />
            <Route exact path='/tags' element={<Tags/>} />
            <Route exact path='/users' element={<Users/>} />
            <Route exact path='/users/:id' element={<ProfilePage />} />
        </Routes>
    </>
  )
}

export default AllRoutes