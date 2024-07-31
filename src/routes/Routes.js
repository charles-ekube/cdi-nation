import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import New from '../pages/new/New'

const RoutesContainer = () => {
  return (
    <>
    <Routes>
        <Route path='/' element ={<Home /> } />
        {/* <Route path = '/new' element = {<New />} /> */}
    </Routes>
    </>
  )
}

export default RoutesContainer