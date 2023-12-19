import React from 'react'
import Navbar from './layouts/Navbar'
import Main from './layouts/Main'
import Footer from './layouts/Footer'
import { Box } from '@mui/material'

function App() {
  return (
    <Box sx={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"}}>
      <Navbar/>
      <Main/>
      <Footer/>
    </Box>
  )
}

export default App
