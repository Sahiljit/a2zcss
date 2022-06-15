import React from 'react'
import './Accordian.css'

const Accordian = () => {
  return (
   
    <div className="accordian">
      <div className = "item"> 
      <p className= "number">01</p>
      <p className=' text'> How to get help ?</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
      <div className= "hidden-box">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Accusantium nobis voluptates, omnis dolorum, obcaecati fugit cum molestias
        ad amet dicta veniam non labore corrupti adipisci accusamus eius velit impedit!
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            Lorem ipsum dolor sit amet.
          </li>
        </ul>

      </div>

      </div>

      <div className = "item open"> 
      <p className= "number">02</p>
      <p className=' text'> How to get refund ?</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
      <div className= "hidden-box">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Accusantium nobis voluptates, omnis dolorum, obcaecati fugit cum molestias
        ad amet dicta veniam non labore corrupti adipisci accusamus eius velit impedit!
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            Lorem ipsum dolor sit amet.
          </li>
        </ul>

      </div>

      </div>


      <div className = "item"> 
      <p className= "number">03</p>
      <p className=' text'> What are the pre-requisites ?</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
      <div className= "hidden-box">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Accusantium nobis voluptates, omnis dolorum, obcaecati fugit cum molestias
        ad amet dicta veniam non labore corrupti adipisci accusamus eius velit impedit!
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            Lorem ipsum dolor sit amet.
          </li>
        </ul>

      </div>

      </div>


    </div>


  )
}

export default Accordian