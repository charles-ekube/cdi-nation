import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import New from '../pages/new/New'
import Verify from '../pages/home/Verify'
import Done from '../pages/home/Done'

const RoutesContainer = () => {
  return (
    <>
    <Routes>
        <Route path='/' element ={<Home /> } />
        <Route path = '/admin_cdi_verify' element = {<Verify />} />
        <Route path = '/done' element = {<Done />} />

    </Routes>
    </>
  )
}

export default RoutesContainer