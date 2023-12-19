import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

function Main() {
  const [showPassword,setShowPassword]=useState(false)
  const [emailValue,setEmailValue]=useState("")
  const [value,setValue]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const handleEmail=(e)=>{
    setEmailValue(e.target.value)
  }
  const handlePassword=(e)=>{
    setValue(e.target.value)
  }
  return (
    <Box component="main" sx={{px:2,height:"80vh",display:"grid",placeItems:"center",}}>
      <Box component="form" onSubmit={handleSubmit} sx={{p:4,width:{xs:"260px",md:"280px"},border:"1px solid black"}}>
        <Typography variant='h5' component="h2" sx={{marginBottom:"10px",textAlign:"center"}}>Login</Typography>
        <Box sx={{display:"flex",flexDirection:"column",gap:"5px"}}>
          <input type="text" placeholder="Username" style={{height:"34px",paddingInline:"14px",paddingBlock:"5px",borderRadius:"50px",outline:"none",border:"1px solid black"}} value={emailValue} onChange={handleEmail}required/>
          <input type={`${!showPassword?"password":"text"}`} placeholder="Password" style={{height:"34px",paddingInline:"14px",paddingBlock:"5px",borderRadius:"50px",outline:"none",border:"1px solid black"}} value={value} onChange={handlePassword} required/>
          <Box sx={{display:"flex"}}>
            <input type='checkbox' id="password" onClick={()=>{setShowPassword(!showPassword)}}/>
            {" "}<Typography component="label" htmlFor='password'>Show Password</Typography>
          </Box>
          <Box sx={{display:"grid",placeItems:"center"}}>
            <Button type="submit" variant='contained'>Login</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Main
