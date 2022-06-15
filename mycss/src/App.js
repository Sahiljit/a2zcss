import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import './App.css'
import SignInForm1 from './components/SignInForm1';
import Home from './screens/Home';
import Accordian from './components/Accordian';
import Carousel from './components/Carousel';
import Tools from './components/Tools';
import Table from './components/Table';
import { Pagination } from './components/Pagination';
import Hero from './components/Hero';
import Layout from './components/Layout';
import Audizon from './audizon/Audizon';
import Inputs from './components/inputs'

function App() {

  const location = useLocation()  

      let tools 
      if(location. pathname === '/' || location.pathname === '/hero' 
      || location.pathname === '/layout'|| location.pathname === '/inputs'){
        tools = null
      }
      else
      tools = <Tools/>
    

  return (
      <>
        
        {tools}      
        
        <Routes>
        <Route path ='/' element ={<Home/>}/>         
        <Route path = '/form1' element = {<SignInForm1/>}/>
        <Route path ='/accordian' element= {<Accordian/>}/>
        <Route path ='/carousel' element ={<Carousel/>}/>
        <Route path ='/table' element ={<Table/>}/>
        <Route path ='/pagination' element ={<Pagination/>}/>
        <Route path ='/hero' element = {<Hero/>}/>
        <Route path ='/layout' element = {<Layout/>}/>
        <Route path ='/audizon' element = {<Audizon/>}/>
        <Route path ='/inputs' element = {<Inputs/>}/>


        </Routes>
      </>
   
  );
}

export default App;
