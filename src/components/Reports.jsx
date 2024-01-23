import React, { useState } from 'react'
import Header from '../commonCoponents/Header'
import SideBar from '../commonCoponents/SideBar'
import BackArrow from '../images/BackArrow.svg'
import DownArrow from '../images/DownArrow.svg'
import UpArrow from '../images/UpArrow.svg'
import PublicPunchlist from '../images/PublicPunchlist.svg'
import InternalPunchlist from '../images/InternalPunchlist.svg'
import image11 from '../images/11.svg'
import image12 from '../images/12.svg'
import image13 from '../images/13.svg'
import image14 from '../images/14.svg'
import Exit from '../images/Exit.svg'
import DropDown from './DropDown'

const Reports = () => {

  const [showImage, setshowImage] = useState([''])
  const [prevImage, setPrevImage] = useState([''])
  console.log("showImage---------->>>>>",showImage)
  const [openModel, setOpenModel] = useState(false)
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
          comments : 'Pier Twist out of tolerance',
          photos : [ image11, image12 ],
        },
      ]

      const block = [0,1,2,3,4,5,6,7]

      const [punchList,setPunchList] = useState('Public')
      const [currentPunchList] = useState('flex flex-row bg-red-500 text-slate-100 w-44	rounded-3xl text-center text-xs leading-4 font-semibold	py-3 px-6 items-center justify-start cursor-pointer')
      const [hidePunchList] = useState('flex flex-row bg-red-100 text-slate-700 w-44	rounded-3xl text-center text-xs leading-4 font-semibold	py-3 px-6 items-center justify-start cursor-pointer')

      const handleImage = ( photo) => {
        setshowImage(photo[0])
        setPrevImage([...photo])
        setBlockDropdownOpen(false)
        setOpenModel(true)
      }

      const [blockDropdownOpen, setBlockDropdownOpen] = useState(false);
      const [sectionDropdownOpen, setSectionDropdownOpen] = useState(false);
      const [rowDropdownOpen, setRowDropdownOpen] = useState(false);

      const handleBlockDropdownToggle = () => {
        setBlockDropdownOpen(!blockDropdownOpen)
      }

      const handleSectionDropdownToggle = () => {
        setSectionDropdownOpen(!sectionDropdownOpen)
      }

      const handleRowDropdownToggle = () => {
        setRowDropdownOpen(!rowDropdownOpen)
      }
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
                <table className="table-auto border-slate-100 w-full">
                  <thead className='h-14 border-slate-100 hover:border-fuchsia-500 border-2'>
                      <tr className='hover:cursor-pointer'>
                          <th className='p-2 font-manrope font-semibold text-xs leading-4 '>
                              <div className='flex flex-row relative' onClick={handleBlockDropdownToggle}>
                                Blocks 
                                {
                                  blockDropdownOpen ? (<img src={DownArrow} alt="Block"/>) : (<img src={UpArrow} alt="Block"/>)
                                }                               
                                
                              </div> 

                              <DropDown blockDropdownOpen = {blockDropdownOpen} block ={block}/>
                          </th>
                          <th className='p-2 font-manrope font-semibold text-xs leading-4 '>
                              <div className='flex flex-row relative' onClick={handleSectionDropdownToggle}>Section 
                              {
                                  sectionDropdownOpen ? (<img src={DownArrow} alt="Section"/>) : (<img src={UpArrow} alt="Section"/>)
                              }
                              </div>
                              <DropDown blockDropdownOpen = {sectionDropdownOpen} block ={block}/>
                          </th>
                          <th className='p-2 font-manrope font-semibold text-xs leading-4'>
                          <div className='flex flex-row relative' onClick={handleRowDropdownToggle}>Row 
                            {
                                  rowDropdownOpen ? (<img src={DownArrow} alt="Row"/>) : (<img src={UpArrow} alt="Row"/>)
                            }
                          </div>
                          <DropDown blockDropdownOpen = {rowDropdownOpen} block ={block}/>
                          </th>
                          <th className='p-2 font-manrope font-semibold text-xs leading-4'>
                              Activity / Sub-Activity
                          </th>
                          <th className='p-2 font-manrope font-semibold text-xs leading-4'>
                              Acceptance Criteria
                          </th>
                          <th className='p-2 font-manrope font-semibold text-xs leading-4'>
                              Comments
                          </th>
                          <th className='p-2 font-manrope font-semibold text-xs leading-4'>
                              Photos
                          </th>
                      </tr>
                  </thead>
                  <tbody className='border-slate-100 hover:border-cyan-600 border-2 mt-4'>
                      {checkSheets?.map((item, index) => (
                          <tr className="border-slate-100 border hover:cursor-pointer" key={item?.id} onClick={() => handleImage(item?.photos)}>
                              <td className='p-2 font-manrope font-normal text-sm leading-5'>{item?.block}</td>
                              <td className='p-2 font-manrope font-normal text-sm leading-5'>{item?.section}</td>
                              <td className='p-2 font-manrope font-normal text-sm leading-5'>{item?.row}</td>
                              <td className='p-2 font-manrope font-normal text-sm leading-5'>{item?.activity}</td>
                              <td className='p-2 font-manrope font-normal text-sm leading-5'>{item?.acceptanceCriteria}</td>
                              <td className={`p-2 font-manrope font-normal text-sm leading-5 ${item?.comments === "Resolved" ? 'text-green-600' : ''}`}>
                                  {item?.comments}
                              </td>
                              <td className='p-2 w-48 grid grid-cols-2 gap-4'>
                                  {item?.photos?.map((photo, index) => (
                                      <img key={index} src={photo} alt={`Photo ${index + 1}`} />
                                  ))}
                              </td>
                          </tr>
                      ))}
                  </tbody>
               </table>


                </div>
                <div>
                  {
                    openModel ? ( <>
                    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-60">                    
                        <div className="relative p-6">
                            <img
                                src={Exit}
                                alt="Exit"
                                className="absolute me-auto top-2 right-6 h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
                                onClick={() => {
                                    setOpenModel(false)
                                }}
                            />
                            <img
                                src={showImage}  
                                alt="Centered Image"
                                className="mx-auto w-72 h-72"
                            />
                        </div>
                        <div className='flex flex-row mt-4'>
                            {prevImage?.map((ima, index) => (
                                <div key={index} className="mx-2" onClick={() => setshowImage(ima)}>
                                    <img src={ima} alt={`index ${index}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    </>) : null
                  }
                </div>
                </div>
      </div>
  </div>
    </>
  }

export default Reports