import React, { useState } from 'react'

const App = () => {
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 })
  return (
    <div>
      <button
        onClick={() =>
          // this unlike class component state, will replace all state, it does NO MERGING, so if you want state to be maintained
          //when using hooks you have to copy the other state over
          setCount((currentState) => ({
            ...currentState,
            count: currentState.count + 1,
          }))
        }
      >
        +
      </button>
      <div>Count 1 : {count}</div>
      <div>Count 2 : {count2}</div>
    </div>
  )
}

export default App
