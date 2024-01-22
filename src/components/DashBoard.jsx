import React from 'react'
import Header from '../commonCoponents/Header'
import SideBar from '../commonCoponents/SideBar'

const DashBoard = () => {
  return <>
  <div className="flex h-screen">
      <SideBar/>
    
      <div className="w-1262 h-full w-full">
            <div className="flex flex-col">
                <Header/>
            </div>
            <div class="z-40 ...">05</div>
            <div class="z-30 ...">04</div>
            <div class="z-20 ...">03</div>
            <div class="z-10 ...">02</div>
            <div class="z-0 ...">01</div>
      </div>
  </div>
    </>
}

export default DashBoard