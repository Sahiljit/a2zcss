import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Box, Stack, Button} from '@mui/material'
import { useLocation } from 'react-router-dom'
import  styles from './Tools.module.css'


const Tools = () => {

    const navigate = useNavigate()
  
    const location = useLocation()  
    let homeButton = location.pathname === '/' ? null
    :<Button variant="outlined" onClick ={()=> navigate('/')}>Home</Button>


  return (
    <Box  className= {styles.tools}>        
          
          <Stack direction="row" spacing ={2}>
          {homeButton}
          <Button variant="outlined" className = {styles.btn}  onClick ={()=> navigate('/form1')}>Sign In Form</Button>
          <Button variant="outlined" className = {styles.btn} onClick ={()=> navigate('/accordian')}>Accordian</Button> 
          <Button variant="outlined" className = {styles.btn} onClick ={()=> navigate('/table')}>Table</Button>   
          <Button variant="outlined" className = {styles.btn} onClick ={()=> navigate('/pagination')}>Pagination</Button>
          <Button variant="outlined" className = {styles.btn} onClick ={()=> navigate('/carousel')}>Carousel</Button>
          <Button variant="outlined" className = {styles.btn} onClick ={()=> navigate('/hero')}>Hero Section</Button> 
          <Button variant="outlined" className = {styles.btn} onClick ={()=> navigate('/layout')}>Layout</Button>
          {/* <Button variant="outlined" className = {styles.btn} onClick ={()=> navigate('/inputs')}>Input Fields</Button>    */}
   
  
   
          
            
          </Stack>

      </Box>
  )
}

export default Tools