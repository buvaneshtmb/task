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
            {/* <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
                <div className=" p-6">
                    <img
                    src={top} 
                    alt="Centered Image"
                    className="mx-auto max-w-full opacity-75"
                    />
                </div>
            </div> */}
      </div>
  </div>
    </>
}

export default AccessRights