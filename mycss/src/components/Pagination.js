import React from 'react'
import {Link} from 'react-router-dom'
import  styles from './Pagination.module.css'


export const Pagination = () => {
  return (
    
    <div className={styles.pagination}>
        <button className={styles.btn}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles['btn-icon']} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg> 
        </button>

        <Link to= "#" className={styles['page-link']}>1</Link>
        <Link to= "#" className={styles['page-link']}>2</Link>
        <Link to= "#" className={styles['page-link']}>3</Link>
        <Link to= "#" className={styles['page-link']}>4</Link>
        <Link to= "#" className={styles['page-link']}>5</Link>
        <span className={styles.dots}>...</span>
        <Link to= "#" className={styles['page-link']}>23</Link>

        <button className={styles.btn}>
            <svg xmlns="http://www.w3.org/2000/svg" className= {styles['btn-icon']} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
        
    </div>
        
    
  )
}
