import React from 'react'
import styles from './Layout.module.css'
import { useNavigate } from 'react-router-dom'

const Layout = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.container}>
        <nav className={styles.nav}>nav</nav>

        <menu className={styles.menu}>
          <button className={styles.btn} onClick = {() => navigate('/')}>HOME</button>
          <button className={styles.btn} onClick = {() => navigate('/carousel')}>CAROUSEL</button>
          <button className={styles.btn} onClick = {() => navigate('/accordian')}>ACCORDIAN</button>
          <button className={styles.btn}>TRASH</button>
          
        </menu>

        <section className={styles.section}>
            <div className={styles.item}> ITEM 1</div>
            <div className={styles.item}> ITEM 2</div>
            <div className={styles.item}> ITEM 3</div>
            <div className={styles.item}> ITEM 4</div>
            <div className={styles.item}> ITEM 5</div>
            <div className={styles.item}> ITEM 6</div>
            <div className={styles.item}> ITEM 7</div>
            <div className={styles.item}> ITEM 8</div>
            <div className={styles.item}> ITEM 9</div>
            <div className={styles.item}> ITEM 10</div>
        </section>

        <main className={styles.main}>MAIN</main>
        
        <aside className={styles.aside}>ASIDE</aside>
    </div>
  )
}

export default Layout