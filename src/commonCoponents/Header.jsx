import React, { useState } from 'react'
import DashBoard from '../images/Dashboard.svg'
import Setup from '../images/Setup.svg'
import Staff from '../images/Staff.svg'
import Reports from '../images/Reports.svg'
import Access from '../images/Access.svg'
import Profile from '../images/Profile.svg'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate('')
    const [currentHeaderTab, setCurrentHeaderTab] = useState('Reports')
    const [currentHeaderColor] = useState('flex flex-row cursor-pointer inline-block text-red-600 border-b-2 border-red-600 ')
    const [touchTab] = useState('flex flex-row cursor-pointer')
    
  return <>
  <div className="grid grid-cols-2 gap-4 h-16 hover:border-fuchsia-500 border-2">
  <div className="grid grid-cols-5 justify-items-center content-center box-border ">
    <div className={currentHeaderTab === 'Dashboard' ? currentHeaderColor : touchTab }> <div className='px-1'><img src={DashBoard} alt='DashBoard' className='p-0.5' /></div> <div className='font-manrope font-medium text-sm leading-5' 
    onClick={() => {
      setCurrentHeaderTab('Dashboard') 
      navigate('/concord/dashboard')
      }}
    >Dashboard</div></div>
    <div className={currentHeaderTab === 'Setup' ? currentHeaderColor : touchTab }> <div className='px-1'><img src={Setup} alt='Setup' className='p-0.5' /> </div> <div className='font-manrope font-medium text-sm leading-5' 
    onClick={() => {
      setCurrentHeaderTab('Setup')
      navigate('/concord/setup')
    }}
    >Set Up</div> </div>
    <div className={currentHeaderTab === 'Staff' ? currentHeaderColor : touchTab }> <div className='px-1'><img src={Staff} alt='Staff' className='p-0.5'/> </div><div className='font-manrope font-medium text-sm leading-5' 
    onClick={() => {
      setCurrentHeaderTab('Staff')
      navigate('/concord/staff-plant')
    }}
    >Staff & Plant</div></div>
    <div className={currentHeaderTab === 'Reports' ? currentHeaderColor : touchTab }> <div className='px-1'><img src={Reports} alt='Reports' className='p-0.5' /></div> <div className='font-manrope font-medium text-sm leading-5' 
    onClick={() => {
      setCurrentHeaderTab('Reports')
      navigate('/concord/reports')
    } }
    > Reports</div></div>
    <div className={currentHeaderTab === 'Access' ? currentHeaderColor : touchTab }> <div className='px-1'><img src={Access} alt='Access' className='p-0.5'/></div> <div className='font-manrope font-medium text-sm leading-5' 
    onClick={() =>{
      setCurrentHeaderTab('Access')
      navigate('/concord/access-rights')
    } }
    >Access Rights</div></div>
  </div>
  <div className='box-border justify-self-end p-4 cursor-pointer' ><img src={Profile} alt='Profile'/></div>
</div>
  </>
}

export default Header