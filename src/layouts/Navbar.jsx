import React from "react";
import {Box, List, ListItem} from '@mui/material'

function Navbar() {
  return (
      <Box component="nav" sx={{display:"flex",position:"sticky",top:"0px",height:"65px",justifyContent:"center",alignItems:"center",px:2}}>
        <Box sx={{flexGrow:1}}>LOGO</Box>
          {/* <Box sx={{flex:5,display:"flex",justifyContent:"flex-start"}}> */}
            <List sx={{display:"flex"}}>
            <ListItem sx={{cursor:"pointer"}}>Home</ListItem>
            <ListItem sx={{cursor:"pointer"}}>Resources</ListItem>
            <ListItem sx={{cursor:"pointer"}}>Download</ListItem>
            <ListItem sx={{cursor:"pointer"}}>Contact</ListItem>
            <ListItem sx={{cursor:"pointer"}}>About</ListItem>
            </List>
          {/* </Box> */}
        <Box sx={{flexGrow:1,display:"flex",justifyContent:"center"}}>
          <input type="search" style={{height:"32px",borderRadius:"50px",paddingInline:"10px",paddingBlock:"5px",outline:"none",border:"1px solid black"}} placeholder="Search"/>
        </Box>
      </Box>
  );
}

export default Navbar;
