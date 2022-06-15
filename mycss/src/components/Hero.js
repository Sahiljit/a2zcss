import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Hero.module.css'
import classnames from 'classnames'

const Hero = () => {
  return (
    <div>
        <header className = {styles.header}>
            <nav className= {classnames(styles.nav ,styles.container)}>
                <div>AUDIZONE</div>
                <Link to ='/'>NAVIGATION</Link>
                {/* <div>NAVIGATION</div> */}

            </nav>

            <div className={styles['header-container']}>
                <div className={styles['inner-header-container']}> 
                    <h1 className={styles.h1}>Listening music is very important for mental health.</h1>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Molestias ipsam at repudiandae architecto quidem earum hic, 
                        nesciunt cumque ad labore.
                    </p>
                    <Link to ="/" className={styles.btn}> Starting Listening Today</Link>
                </div>
            </div>
        </header>
        
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.h2}> Some random heading</h2>
                <p className= {styles.p}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos saepe ex enim! 
                    Est enim quibusdam nihil qui repudiandae, non mollitia nesciunt voluptas recusandae rem tempora iure eos quisquam ipsum!
                </p>
            </div>

        </section>


    </div>
  )
}

export default Hero