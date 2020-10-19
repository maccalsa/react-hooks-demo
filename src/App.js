import React, { useState } from 'react'

const expensiveInitialState = () => {
  //expensive work
  return 10
}

const App = () => {
  const [state, setstate] = useState(10)

  // this will be called the 1st time, and not every time the component remders
  const [state2, setstate2] = useState(() => expensiveInitialState)

  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* The way below is a little safer, as it prevents race conditions if you have multiple events that can change 'count*/}
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      <div>{count}</div>
    </div>
  )
}

export default App
