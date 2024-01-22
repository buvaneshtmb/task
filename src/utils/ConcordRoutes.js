import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Sheet from '../components/Reports';
import NotFound from '../commonCoponents/NotFound';
const ConcordRoutes = () => {
  return <>
  <Routes>
    <Route path='dashbord' element ={<Sheet/> }/>
    <Route path='setup' element ={<Sheet/> }/>
    <Route path='staff-plant' element ={<Sheet/> }/>
    <Route path='reports' element ={<Sheet/> }/>
    <Route path='access-rights' element ={<Sheet/> }/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </>
}

export default ConcordRoutes