import React from 'react'
import { useState } from 'react'
import { useFormik  } from 'formik';
import * as Yup from "yup";
import ApiServices from '../Api/ApiService'
import { useNavigate } from 'react-router-dom';
import { userAtom } from "../store"
import { useAtom } from 'jotai'
import logo from '../images/Group36804.svg'
import bg from '../images/background-logo-1.svg'


const Login = () => {
    const navigate = useNavigate()

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [user, setUser] = useAtom(userAtom)
    const formik = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
        validationSchema : Yup.object({
            email : Yup.string().required("Please enter the email").matches(emailRegex, 'Please Enter the correct User Name'),
            password : Yup.string().nullable().required("please enter the password")
        }),
        onSubmit : async values => {
            try {
            const project_id = 1 
            const res = await ApiServices.post('auth/login', values,{
                'Content-Type': 'application/json',
                'project_id': project_id, 
            })
            if(res?.status === 200){
                setUser(res?.user)
                sessionStorage.setItem("access_token",res?.access_token)
                sessionStorage.setItem("refresh_token",res?.refresh_token)
                window.alert("User Login")
                // navigate()      want to go user page
            }
            else if(res?.status === 404){
                window.alert("User not Found")
            }
            else{
                window.alert("UserName or Password Wrong")
            }
            console.log(res)
            } catch (error) {
                console.log(error)
            }
            
        }
    })

  return <>



  <div className='my-48 ml-96 h-44 w-96'>
            <div className='mb-8'>
                <img src={logo} alt='Product Logo' className='w-44	' />
            </div>

            <form onSubmit={formik.handleSubmit} >
            <div className='py-3.5'>
            <label className='font-normal py-3.5'>User Name</label>
            <br/>
            <input 
                className= { formik?.touched?.email && formik?.errors.email ? 'rounded-xl space-y-48 py-3.5 border-2 border-inherit border-red-400 w-72	': 'rounded-xl space-y-48 py-3.5 border-2 border-inherit w-72	'}
                type='text' 
                placeholder='john@surya123' 
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
            
            <div className='py-3.5'>
            <label className='font-normal py-3.5'>Password</label>
            <br/>
            <input 
                className= { formik?.touched?.password && formik?.errors?.password ? 'rounded-xl space-y-48 py-3.5 border-2 border-inherit border-red-400 w-72	': 'rounded-xl space-y-48 py-3.5 border-2 border-inherit w-72	'}
                type='text' 
                placeholder='Enter Password' 
                value={formik.values.password} 
                onChange={e => formik.setFieldValue("password",e.target.value)
            }  
            />
            {
                formik?.touched?.password && formik?.errors?.password ? (
                    <p className='text-red-500 font-thin text-xs my-1'>{ formik?.errors?.password}</p>
                ) : null
            }
            </div>
            

            <p className='text-sm ml-44 cursor-pointer' onClick={() => navigate('/reset-password')}>Forgot Password?</p>
            <div>
            <button type='submit' className='bg-red-500	border-2 rounded-2xl px-24 py-3 justify-evenly w-72 text-white	'>Log in</button>
            </div>
            </form>
  </div>   
        

  </>
}

export default Login