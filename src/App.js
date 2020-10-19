import React, { useEffect, useState } from 'react'
import useForm from './useForm'
import Hello from './Hello'

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  })

  useEffect(() => {
    const onMouseMove = (e) => {
      console.log(e)
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div>
      <input
        name="firstName"
        placeholder="first name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  )
}

export default App
