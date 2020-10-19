## cannot nest hooks inside loops. conditions, or nested functions

```
import React from 'react'

const App = () => {
  if (true) {
    const [state, setstate] = useState(initialState)
  }
  return <div>Hey</div>
}

export default App
```

```
./src/App.js
  Line 5:31:  React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
  Line 5:31:  'useState' is not defined                                                                                                    no-undef
  Line 5:40:  'initialState' is not defined                                                                                                no-undef

Search for the keywords to learn more about each error.
```

```
 // this will be called the 1st time, and not every time the component remders
  const [state2, setstate2] = useState(() => expensiveInitialState)
```

Genral rule, if you are updating to values in tandem with one event put them together like this, if not... do not have one count associated to one ise state and one to another

```
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
```

```
import React, { useState } from 'react'

// this could get very large, very fast based on how long our form is
// is there a better way??
const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  )
}

export default App
```

```
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
```
