import React, { useEffect } from 'react'
import useForm from './useForm'

// this could get very large, very fast based on how long our form is
// is there a better way??
const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
  })

  useEffect(() => {
    console.log('I changed the password')
  }, [values.password])

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  )
}

export default App
