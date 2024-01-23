import React from 'react'
import SideBar from '../commonCoponents/SideBar'
import Header from '../commonCoponents/Header'
import Summary from '../images/reportImages/Summary.svg'
import InstallStats from '../images/reportImages/InstallStats.svg'
import Checklist from '../images/reportImages/Checklist.svg'
import RightCircle from '../images/reportImages/RightCircle.svg'
import { useNavigate } from 'react-router-dom'

const Reports = () => {
    const navigate = useNavigate()
  return <>
  <div className="flex h-screen">
      <SideBar/>
    
      <div className="w-1262 h-full w-full">
            <div className="flex flex-col">
                <Header/>
            </div>
            <div className='w-20 h-7 ml-6 font-manrope font-bold text-sm leading-7'  > Reports</div>
            <div className="grid gap-6 grid-cols-3 ml-6 mt-6 w-9/12 h-64 border-2 border-transparent hover:border-sky-600">

            <div><img src={ Summary } alt="Summary" className='rounded-tl-2xl rounded-tr-2xl border border-white' />
            <div className='flex justify-around p-4 rounded-bl-2xl rounded-br-2xl rounded-tr-none rounded-tl-none border border-t-white border-gray-200' >
                <div>Summary</div>
                <img className='cursor-pointer' src= {RightCircle} alt="RightCircle" />
            </div>
            </div>
            
            <div><img src={ InstallStats } alt="InstallStats" className='rounded-tl-2xl rounded-tr-2xl border border-white' />
            <div className='flex justify-around p-4 rounded-bl-2xl rounded-br-2xl rounded-tr-none rounded-tl-none border border-t-white border-gray-200'>
            <div>Install Stats  </div>
            <img className='cursor-pointer' src= {RightCircle} alt="RightCircle" />
            </div>
            </div>
            
            <div><img src={ Checklist } alt="Checklist" className='rounded-tl-2xl rounded-tr-2xl border border-white' />
            <div className='flex justify-around p-4 rounded-bl-2xl rounded-br-2xl rounded-tr-none rounded-tl-none border border-t-white border-gray-200'>
            <div>QC Punchlist & Checksheets </div>
            <img className='cursor-pointer' src= {RightCircle} alt="RightCircle" onClick={ ()=> navigate('punchlist') }/> 
            </div>
            </div>
            
            </div>

      </div>
  </div>
    </>
}

export default Reports