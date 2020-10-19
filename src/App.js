import React, { useState } from 'react'

// this could get very large, very fast based on how long our form is
// is there a better way??
const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
  })
  return (
    <div>
      <input name="email" value={email} onChange={handleChange} />
      <input
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
    </div>
  )
}

export default App
