import React from 'react'
import Tools from '../components/Tools'
import { useNavigate } from 'react-router-dom';
import {Button} from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import './Home.css'


const Home = () => {   

  const navigate = useNavigate()

  return (
        <div className='home'>
         
          <div className='nav'>
              <h1>Welcome to my CSS toolkit</h1>
              <img src = '/images/sahiljit_sandhu.jpeg'/>
          </div>
          <Tools/>

          {/* <div className='home-container' >
          <Button variant="contained"  onClick = {()=> navigate('/audizon')}>AUDIZON
          <ArrowRightAltIcon/>
          </Button>
          </div> */}

        
          </div>       
    
  )
}

export default Home