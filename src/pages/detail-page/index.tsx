import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import styles from './index.module.css'

const DetailPage = () => {
  const location = useLocation()
  const data = location.state

  return (
    <div className={styles.detail}>
      <Link to="/">
        <button>back</button>
      </Link>
      <div className={styles.bio}>
        <h1>Biodata diri</h1>
        <div className={styles.form}>
          <p>Nama : {data.name}</p>
          <p>Umur : {data.age}</p>
          <p>Alamat : {data.address}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
