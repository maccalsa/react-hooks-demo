import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true })
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }))
    const fetchData = async () => {
      const response = await fetch(url)
      const text = await response.text()
      setState({ data: text, loading: false })
      // setState({ data: response.text(), loading: false })
      //   fetch(url)
      //     .then((x) => x.text())
      //     .then((y) => setState({ data: y, loading: false }))
    }

    fetchData()
  }, [url])

  return state
}

export default useFetch
