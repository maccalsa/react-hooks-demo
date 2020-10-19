import React, { useState } from 'react'

// this could get very large, very fast based on how long our form is
// is there a better way??
const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
  })

  // when this component is rerendered this will get called.
  useEffect(() => {
    effect
    // this will cleanup the component (if required on unmount)
    // For example say on render we subscribe to a listenener. here you would unsubscribe
    return () => {
      cleanup
    }
    // this is how you get the component to render less than its, default which is (EVERY TIME SOMETHING HAPPENS)
  }, [input])

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
