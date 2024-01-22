import React from 'react'
import Header from '../commonCoponents/Header'
import SideBar from '../commonCoponents/SideBar'


const SetUp = () => {
  return <>
  <div className="flex h-screen">
      <SideBar/>
    
      <div className="w-1262 h-full w-full">
            <div className="flex flex-col">
                <Header/>
            </div>

            <button class="bg-indigo-500 opacity-25 w-1262 h-full w-full">buvanesh</button>
      </div>
  </div>
    </>
}

export default SetUp