import React, { useState } from 'react'
import Header from '../commonCoponents/Header'
import SideBar from '../commonCoponents/SideBar'
import BackArrow from '../images/BackArrow.svg'
import DownArrow from '../images/DownArrow.svg'
import PublicPunchlist from '../images/PublicPunchlist.svg'
import InternalPunchlist from '../images/InternalPunchlist.svg'
import image11 from '../images/11.svg'
import image12 from '../images/12.svg'
import image13 from '../images/13.svg'
import image14 from '../images/14.svg'

const Sheet = () => {
    const checkSheets =[
        {
          id:1,
          block : '2',
          section : '2',
          row : '45',
          activity : 'Tracker Components Installation',
          acceptanceCriteria	 : 'Heavy BHAs or Light BHAs',
          comments : 'BHA pin on Pier G not centered',
          photos : [ image11, image12, image13, image14 ]
        },
        {
          id:2,
          block : '4',
          section : '3',
          row : '16',
          activity : 'Tracker Components Installation',
          acceptanceCriteria	 : 'Heavy BHAs or Light BHAs',
          comments : 'Pier Twist out of tolerance',
          photos : [ image11, image12 ],
        },
        {
          id:3,
          block : '6',
          section : '3',
          row : '12',
          activity : 'Tracker Components Installation',
          acceptanceCriteria	 : 'Heavy BHAs or Light BHAs',
          comments : 'Resolved',
          photos : [image11],
        },
        {
          id:4,
          block : '5',
          section : '1',
          row : '16',
          activity : 'Tracker Components Installation',
          acceptanceCriteria	 : 'Heavy BHAs or Light BHAs',
          comments : '¼” fastener of module in bay 3 (b/w Pier G and F) to be swaged ¼” fastener of module in bay 3 (b/w Pier G and F) to be swaged',
          photos : [ image11, image12 ],
        },
      ]

      const [punchList,setPunchList] = useState('Public')
      const [currentPunchList] = useState('flex flex-row bg-red-500 text-slate-100 w-44	rounded-3xl text-center text-xs leading-4 font-semibold	py-3 px-6 items-center justify-start cursor-pointer')
      const [hidePunchList] = useState('flex flex-row bg-red-100 text-slate-700 w-44	rounded-3xl text-center text-xs leading-4 font-semibold	py-3 px-6 items-center justify-start cursor-pointer')
  return <>
  <div className="flex h-screen">
      <SideBar/>
    
      <div className="w-1262 h-full w-full">
            <div className="flex flex-col">

            <Header/>

                <div className='flex flex-row h-32 border-slate-100	 hover:border-fuchsia-500 border-2'>
                  <div className='flex flex-col justify-evenly w-3/6 '>
                    <div className='flex-1 flex items-center justify-start ml-6'><img src={BackArrow} alt="BackArrow" /></div>
                    <div className='flex-1 flex items-center justify-start font-manrope font-bold text-xl	leading-7	ml-6'>QC Punchlist & Checksheets </div>
                  </div>
                  <div className='flex flex-row w-3/6 '>
                    <div className='flex-1 flex items-center justify-center border-1 rounded-md	'>
                      <div className={punchList === 'Public' ? currentPunchList : hidePunchList} onClick={()=> setPunchList('Public')} > 
                          <div className='basis-1/4'>
                            <img src={PublicPunchlist} alt="PublicPunchlist" />
                          </div>
                          <div className='basis-3/4' >
                            Public Punchlist
                          </div>
                      </div>
                      <div className={punchList === 'Internal' ? currentPunchList : hidePunchList} onClick={()=> setPunchList('Internal')}>
                        <div className='basis-1/4'>
                            <img src={InternalPunchlist} alt="InternalPunchlist"/>
                        </div>
                        <div className='basis-3/4' >
                            Internal Punchlist
                        </div>
                        </div>
                      <div></div>
                    </div>
                    <div className='flex-1 flex items-center justify-center'>
                      View By 
                      <div className='flex flex-row ml-2'>All<img src={DownArrow} alt='DownArrow' className='p-1 '/></div>
                    </div>
                    <div className='flex-1 flex items-center justify-center'>
                      Download
                      <img src={DownArrow} alt='DownArrow' className='p-1'/>
                    </div>
                  </div>
                </div>
                <div>
                <table className="table-auto border-slate-100	">
                  <thead className='h-14 border-slate-100	 hover:border-fuchsia-500 border-2'>
                    <tr >
                      <th className='p-2'>Block</th>
                      <th className='p-2'>Section</th>
                      <th className='p-2'>Row</th>
                      <th className='p-2'>Activity / Sub-Activity</th>
                      <th className='p-2'>Acceptance Criteria</th>
                      <th className='p-2'>Comments</th>
                      <th className='p-2'>Photos</th>
                    </tr>
                  </thead >
                    <tbody className='border-slate-100	hover:border-cyan-600 border-2 mt-4'>
                      {
                        checkSheets?.map((item, index) => (
                          <>
                        <tr className=" border-slate-100	border " key={item?.id}>
                        <td className='p-2'>{item?.block}</td>
                        <td className='p-2'>{item?.section}</td>
                        <td className='p-2'>{item?.row}</td>
                        <td className='p-2'>{item?.activity}</td>
                        <td className='p-2'>{item?.acceptanceCriteria}</td>
                        <td className='p-2'><p className = {`${item?.comments === "Resolved" ? 'text-green-600' : ''}`}>{item?.comments}</p></td>
                        <td className='p-2 w-48	grid grid-cols-2 gap-4'>
                        {
                            item?.photos?.map((photo, index) => (
                              <img key={index} src={photo} alt={`Photo ${index + 1}`} />
                          ))
                        }                         
                        </td>
                      </tr>
                      </>
                        ))
                      }
                      
                    </tbody>
                </table>
                </div>
                </div>
      </div>
  </div>
    </>
  }

export default Sheet