import React, { useState } from 'react'
import Surya from '../images/Surya.svg'
import Projects from '../images/Projects.svg'


const SideBar = () => {
    const [currentTab, setCurrentTab] = useState('Concord')
  return <>
  <div className="w-178 h-full bg-gray-50 border-2 border-slate-100	 hover:border-fuchsia-500	"> 
       <div className='mt-6 mr-6 ml-3 w-24	h-5' ><img src={Surya} alt='Surya' /></div> 
         <div className='flex flex-row mt-20'>
          <div className='ml-6'><img src={  Projects } alt='Projects'/></div>
          <div className='font-manrope font-bold text-lg leading-6 mr-3 mx-1.5'>Projects</div>
        </div>
          <div className='flex flex-col space-y-8 mt-10'>
              <div className={ currentTab === 'Concord' ? 'flex-1 flex items-center justify-center bg-red-500 font-manrope font-medium text-sm	leading-5 py-2 cursor-pointer' 
              : 'flex-1 flex items-center justify-center font-manrope font-medium text-sm	leading-5 text-slate-400 py-2 cursor-pointer' 
              } onClick={() => setCurrentTab('Concord')}>
                Concord</div>
              <div className={ currentTab === 'San_diego' ? 'flex-1 flex items-center justify-center bg-red-500 font-manrope font-medium text-sm	leading-5 py-2 cursor-pointer' 
              : 'flex-1 flex items-center justify-center font-manrope font-medium text-sm	leading-5 text-slate-400 py-2 cursor-pointer'
               } onClick={() => setCurrentTab('San_diego')}>
                San diego</div>
              <div className={ currentTab === 'Fresno' ? 'flex-1 flex items-center justify-center bg-red-500 font-manrope font-medium text-sm	leading-5 py-2 cursor-pointer' 
              : 'flex-1 flex items-center justify-center font-manrope font-medium text-sm	leading-5 text-slate-400 py-2 cursor-pointer' 
              } onClick={() => setCurrentTab('Fresno')}>
                Fresno</div>
              <div className={ currentTab === 'Sacramento' ? 'flex-1 flex items-center justify-center bg-red-500 font-manrope font-medium text-sm	leading-5 py-2 cursor-pointer' 
              : 'flex-1 flex items-center justify-center font-manrope font-medium text-sm	leading-5 text-slate-400 py-2 cursor-pointer' 
              } onClick={() => setCurrentTab('Sacramento')}>
                Sacramento</div>
              <div className={ currentTab === 'Bakersfield' ? 'flex-1 flex items-center justify-center bg-red-500 font-manrope font-medium text-sm	leading-5 py-2 cursor-pointer' 
              : 'flex-1 flex items-center justify-center font-manrope font-medium text-sm	leading-5 text-slate-400 py-2 cursor-pointer' 
              } onClick={() => setCurrentTab('Bakersfield')}>
                Bakersfield</div>
          </div>
 </div>
  </>
}

export default SideBar