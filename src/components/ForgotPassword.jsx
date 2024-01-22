import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik  } from 'formik';
import * as Yup from "yup";
import { ApiServices } from '../Api/ApiService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useAtom } from 'jotai'
import { emailAtom } from '../store'


const ForgotPassword = () => {

    const navigate = useNavigate()
    const [email ,setEmail] = useAtom(emailAtom)

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const formik = useFormik({
        initialValues : {
            email : ''
        },
        validationSchema : Yup.object({
            email : Yup.string().required("Please enter the email").matches(emailRegex, 'Please Enter the correct User Name')
        }),
        onSubmit : async values => {
            try {
            // const res = await ApiServices.post()
            console.log("values?.email----->>>",values?.email)
            setEmail(values?.email)
            navigate('/reset-password-email')
            } catch (error) {
                console.log(error)
            }
            
        }
    })
  return <>
  <div className='mx-96 my-48 h-72 w-96'>
    <div className='cursor-pointer	'>
       <FontAwesomeIcon icon={faArrowLeft} onClick={ () => navigate('/') } />
    </div>

  <div class="w-52 h-20">
            <h1 class="font-bold text-wrap w-28 text-2xl">Forgot Password</h1>
  </div>
    <div>
        <h1 className='font-semibold mb-3'>Don't Worry! we got your back</h1>
    </div>
            <form onSubmit={formik.handleSubmit}>
            
            <div className='mb-8'>
            <label className='font-normal py-2.5 my-10'>Email</label>
            <br/>
            <input 
            className= { formik?.touched?.email && formik?.errors.email ? 'rounded-md space-y-48 py-2.5 border-2 border-inherit border-red-400 my-2 w-80': 'rounded-md space-y-48 py-2.5 border-2 border-inherit my-2 w-80 '}
            type='text' 
            placeholder='Enter Your Email' 
            value={formik.values.email} 
            onChange={e => formik.setFieldValue("email",e.target.value)}
            onBlur={formik.handleBlur}  
            />
            {
                formik?.touched?.email && formik?.errors.email ? (
                    <p className='text-red-500 font-thin text-xs my-1'>{ formik?.errors?.email}</p>
                ) : null 	
            }
            </div>
            
            <div>
            <button type='submit' className='bg-red-500	rounded-full px-10 py-3 text-white w-80'>Send Reset Link</button>
            </div>
            </form>
  </div>          

  </>
}

export default ForgotPassword