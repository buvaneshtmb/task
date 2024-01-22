import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  let navigate = useNavigate()
  return <>
    <h1 style={{"textAlign":"center"}}>404 Not Found</h1>
    <div style={{"textAlign":"center"}}>Ufffff....! &nbsp;
    <span onClick={()=>navigate('/concord/reports')} style={{"color":"blue", cursor:"pointer"}}>Home</span>
    </div>
    </>
}

export default NotFound