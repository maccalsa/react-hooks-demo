import React, { useState } from 'react'

// UseForm can be used anywahre, it has no UI associated to it, just the data on the form and a means to update it
const useForm = (intialValues) => {
  const [values, setValues] = useState(intialValues)
  return [
    values,
    (e) =>
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      }),
  ]
}

export default useForm
