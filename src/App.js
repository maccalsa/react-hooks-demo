import React, { useEffect, useState } from 'react'
import useForm from './useForm'
import Hello from './Hello'

// this could get very large, very fast based on how long our form is
// is there a better way??
const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  })

  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow((s) => !s)}>toggle</button>
      {show && <Hello />}
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
