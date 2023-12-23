import React from 'react'
import Navbar from './layouts/Navbar'
import Main from './layouts/Main'
import Footer from './layouts/Footer'
import { Box } from '@mui/material'
import Auth from './context/Auth'

function App() {
  
  return (
    <Auth>
    <Box sx={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"}}>
      <Navbar/>
      <Main/>
      <Footer/>
    </Box>
    </Auth>
  )
}

export default App
