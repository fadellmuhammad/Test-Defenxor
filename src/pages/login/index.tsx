import React, { useState, useEffect } from 'react'
import Loading from '../../components/loading'
import icon_login from '../../assets/login.png'
import styles from './index.module.css'
import Modal from '../../components/modal'

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type MouseEvent = React.MouseEvent<HTMLButtonElement>;

const user = {
  email: 'fadel@gmail.com',
  password: '111111',
}

const Login: React.FC = () => {
  const [modal, setModal] = useState(false)
  const [load, setLoad] = useState(false)
  const [isChecked, setIsChecked] = useState(true)
  const [loginMessage, setLoginmessage] = useState('')
  const [value, setValue] = useState({
    email: '',
    password: '',
    remember: false,
  })
  const [messageFormValid, setMessageFormValid] = useState({
    email_message: '',
    password_message: '',
  })

  const handleModal = () => {
    setModal(false)
  }

  const EmailValidation = () => {
    const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (expression.test(value.email)) {
      setMessageFormValid({ ...messageFormValid, email_message: '' })
      return true
    } else {
      setMessageFormValid({
        ...messageFormValid,
        email_message: 'format email salah',
      })
      return false
    }
  }

  const PasswordValidation = () => {
    if (value.password.length >= 6) {
      setMessageFormValid({ ...messageFormValid, password_message: '' })
      return true
    } else {
      setMessageFormValid({
        ...messageFormValid,
        password_message: 'password kurang dari 6',
      })
      return false
    }
  }

  const FormValidation = () => {
    if (EmailValidation() && PasswordValidation()) {
      setMessageFormValid({
        ...messageFormValid,
        email_message: '',
        password_message: '',
      })
      return true
    } else {
      if (!EmailValidation() && !PasswordValidation()) {
        setMessageFormValid({
          ...messageFormValid,
          email_message: 'format email salah',
          password_message: 'password kurang dari 6',
        })
      } else if (!EmailValidation()) {
        setMessageFormValid({
          ...messageFormValid,
          email_message: 'format email salah',
        })
      } else if (!PasswordValidation()) {
        setMessageFormValid({
          ...messageFormValid,
          password_message: 'password kurang dari 6',
        })
      }
    }
  }

  const handleOnChange = (e: InputEvent) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const handleCheckbox = () => {
    setValue({ ...value, remember: isChecked })
    setIsChecked(!isChecked)
  }

  const UserValidation = () => {
    if (value.email === user.email && value.password === user.password) {
      setLoad(true)
      setTimeout(() => {
        setLoad(false)
        setModal(true)
      }, 1000)
      setLoginmessage('Berhasil Login')
    } else {
      setLoad(true)
      setTimeout(() => {
        setLoad(false)
        setModal(true)
      }, 1000)
      setLoginmessage('Email/Password yang dimasukkan salah')
    }
  }

  const handleOnSubmit = (e: MouseEvent) => {
    e.preventDefault()
    if (FormValidation()) {
      UserValidation()
    }

    if (value.remember === true) {
      localStorage.setItem('user', value.remember.toString())
    }
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      console.log('berhasil', loggedInUser)
    }
  }, [])

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={icon_login} alt="icon_login" />
        </div>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleOnChange}
            onKeyUp={EmailValidation}
          />
          <p className={styles.warning_message}>
            {messageFormValid.email_message}
          </p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleOnChange}
            onKeyUp={PasswordValidation}
          />
          <p className={styles.warning_message}>
            {messageFormValid.password_message}
          </p>
          <div className={styles.checkbox_container}>
            <input
              type="checkbox"
              name="remember"
              onChange={handleCheckbox}
            />
            <p className={styles.remember}>remember me</p>
          </div>
          <button
            className={styles.button}
            type="submit"
            onClick={handleOnSubmit}
          >
            Login
          </button>
          {load ? (
            <div className={styles.modal}>
              <Loading />
            </div>
          ) : (
            ''
          )}
        </form>
      </div>
      {modal ? <Modal message={loginMessage} handleModal={handleModal} /> : ''}
    </div>
  )
}

export default Login
