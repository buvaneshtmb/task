import React from 'react'
import Header from '../commonCoponents/Header'
import SideBar from '../commonCoponents/SideBar'
import top from '../images/11.svg'


const AccessRights = () => {
  return <>
  <div className="flex h-screen">
      <SideBar/>
    
      <div className="w-1262 h-full w-full">
            <div className="flex flex-col">
                <Header/>
            </div>
      </div>
  </div>
    </>
}

export default AccessRights