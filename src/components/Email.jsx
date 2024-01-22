import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom, useAtomValue } from 'jotai'
import { emailAtom } from '../store' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Email = () => {
    const navigate = useNavigate()
    const [email ,setEmail] = useAtom(emailAtom)
  return <>
  <div className='w-96 h-48 my-64	ml-96 flex flex-col justify-between '>
    <div className='text-center'>
    <FontAwesomeIcon icon={faCircleCheck} size="2xl" style={{color: "#63E6BE"}} />    </div>
    <div>
      <h1 className='font-semibold text-center'>
          Email Sent Successfully
      </h1>
    </div>
      <div className='text-center'>
        <p>
            please check your inbox or spam folder at  &nbsp;&nbsp;
            {email ?? null} for a link to reset your password.
        </p>
      </div>

      <div>
        <p className='text-red-500 text-center cursor-pointer' onClick={() => navigate('/')}>
            Go Back to Log in Page
        </p>
      </div>
  </div>
  
  </>
}

export default Email