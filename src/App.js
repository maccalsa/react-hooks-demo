import React, { useEffect } from 'react'
import useForm from './useForm'

// this could get very large, very fast based on how long our form is
// is there a better way??
const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  })

  useEffect(() => {
    console.log('I changed the password')
  }, [values.password])

  useEffect(() => {
    console.log('I changed the email or firstName')
    // Note that only a shallow comparison is done here, so every time these values change, this effect is triggerd.
    // if we just put 'values' in here, it would trigger on ANY change to that object
    // so if you want an effect to onlu trigger on specific values, make sure that they have been decomposed here
  }, [values.firstName, values.email])

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
