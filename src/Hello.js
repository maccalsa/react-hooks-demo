import React, { useEffect } from 'react'

const Hello = () => {
  useEffect(() => {
    console.log('I got called (only once} just like mount')
    return () => {
      console.log('I got called on unmount')
    }
  }, [])

  return <div>Hi there</div>
}

export default Hello
