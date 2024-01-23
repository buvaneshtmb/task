import React from 'react'
import Header from '../commonCoponents/Header'
import SideBar from '../commonCoponents/SideBar'
import DropdownComponent from './DropDown'

const StaffPlant = () => {
  return <>
  <div className="flex h-screen">
      <SideBar/>
    
      <div className="w-1262 h-full w-full">
            <div className="flex flex-col">
                <Header/>
            </div>
            <DropdownComponent/>


      </div>
  </div>
    </>
}

export default StaffPlant