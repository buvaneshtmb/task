import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import DashBoard from '../components/DashBoard';
import SetUp from '../components/SetUp';
import StaffPlant from '../components/StaffPlant';
import Reports from '../components/Reports';
import AccessRights from '../components/AccessRights';
import NotFound from '../commonCoponents/NotFound';

const ConcordRoutes = () => {
  return <>
  <Routes>
    <Route path='dashbord' element ={<DashBoard/> }/>
    <Route path='setup' element ={<SetUp/> }/>
    <Route path='staff-plant' element ={<StaffPlant/> }/>
    <Route path='reports' element ={<Reports/> }/>
    <Route path='access-rights' element ={<AccessRights/> }/>
    <Route path='access-rights' element ={<AccessRights/> }/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </>
}

export default ConcordRoutes