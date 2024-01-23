import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import DashBoard from '../components/DashBoard';
import SetUp from '../components/SetUp';
import StaffPlant from '../components/StaffPlant';
import ReportPunchlist from '../components/ReportPunchlist';
import AccessRights from '../components/AccessRights';
import NotFound from '../commonCoponents/NotFound';
import Reports from '../components/Reports';

const ConcordRoutes = () => {
  return <>
  <Routes>
    <Route path='dashboard' element ={<DashBoard/> }/>
    <Route path='setup' element ={<SetUp/> }/>
    <Route path='staff-plant' element ={<StaffPlant/> }/>
    <Route path='reports' element ={<Reports/> }/>
    <Route path='reports/punchlist' element ={<ReportPunchlist/> }/>
    <Route path='access-rights' element ={<AccessRights/> }/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </>
}

export default ConcordRoutes