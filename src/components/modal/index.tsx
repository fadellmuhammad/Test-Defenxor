import React from 'react'
import styles from './index.module.css'

interface Type {
  message?: string
  handleModal?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Modal = (props: Type) => {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <h1>{props.message}</h1>
          <button onClick={props.handleModal}>tutup</button>
        </div>
      </div>
    </div>
  )
}

export default Modal