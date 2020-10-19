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
