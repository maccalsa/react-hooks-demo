import React, { useEffect, useState } from 'react'
import useForm from './useForm'
import Hello from './Hello'
import useFetch from './useFetch'

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  })

  const [count, setCount] = useState(1)
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

  return (
    <div>
      <div>{loading ? '...' : data}</div>
      <div>Count : {count}</div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </div>
  )
}

export default App
