import React from 'react'
import './Carousel.css'

const Carousel = () => {
  return (
    <div className='carousel'>
        <img src = "/images/sahiljit.jpg"/>
        <blockquote className='testimonial'>
            <p className='testimonial-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Voluptates culpa, aperiam hic commodi doloremque ut 
                provident nemo laudantium enim cum?
            </p>
            <p className='testimonial-author'> Sahiljit Sandhu</p>
            <p className='testimonial-job'>Web Developer</p>
        </blockquote>

        <button className='btn btn--l'>
            <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>  
        </button>   

        <button className='btn btn--r'>
            <svg xmlns="http://www.w3.org/2000/svg" className= "btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>   

        <div className='dots'>
          <button className='dot dot--fill'></button>
          <button className='dot'></button>
          <button className='dot'></button>
          <button className='dot'></button>


        </div>

    </div>
  )
}

export default Carousel