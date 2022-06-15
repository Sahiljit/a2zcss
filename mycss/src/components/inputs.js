import { style } from '@mui/system'
import React from 'react'
import styles from './inputs.module.scss'

const Inputs = () => {
  return (
    <div className={styles.container}>
        <label className={styles['custom-field']}>
        <input type="email" placeholder="&nbsp;"/>
        <span className={styles.placeholder}>Enter Email</span>
        {/* <span className="error-message" aria-live="polite">The email is invalid</span> */}
        </label>

        <label className={styles["custom-field" ]}>
        <input type="text" placeholder=" "/>
        <span className={styles.placeholder}>Enter Text</span>
        </label>

        <label className={styles["custom-field"]}>
        <input type="url" placeholder="&nbsp;"/>
        <span className={styles.placeholder}>Enter URL</span>
        </label>

        <label className={styles["custom-field"]}>
        <input type="password" placeholder="&nbsp;"/>
        <span className={styles.placeholder}>Enter Password</span>
        <span className={styles.border}></span>
        </label>
    </div>
  )
}

export default Inputs