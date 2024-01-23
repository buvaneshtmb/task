import React from 'react'

const DropDown = ( { blockDropdownOpen, block }) => {
    console.log("blockDropdownOpen------>>>",blockDropdownOpen)
    console.log("block------>>>",block)
  return <>
  <div
                                    id="dropdownHelper"
                                    className={`box-border absolute z-10 ${blockDropdownOpen ? '' : 'hidden'} bg-white border-1 px-0	pb-0 pt-4 divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700 dark:divide-gray-600`}
                                >
                                  <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperButton">
                                  <li>
                                  <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div className="flex items-center h-5">
                                        <input id="helper-checkbox-1" aria-describedby="helper-checkbox-text-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    </div>
                                    <div className="ms-2 text-sm">
                                        <label htmlFor="helper-checkbox-1" className="font-medium text-gray-900 dark:text-gray-300">
                                          <div>All </div>
                                        </label>
                                    </div>
                                  </div>
                                </li>
                                {
                                  block?.map((data,index)=>(
                                <>
                                    <li key={index}>
                                      <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input id="helper-checkbox-2" aria-describedby="helper-checkbox-text-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                        </div>
                                        <div className="ms-2 text-sm">
                                            <label htmlFor="helper-checkbox-2" className="font-medium text-gray-900 dark:text-gray-300">
                                              <div>{data}</div>
                                            </label>
                                        </div>
                                      </div>
                                    </li>
                                </>
                                  ))
                                }
                                  </ul>
                              </div>
  </>
}

export default DropDown