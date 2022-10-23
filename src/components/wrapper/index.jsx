import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className='dark:bg-grey container mx-auto py-4 px-2 min-h-screen'>{ children }</div>
  )
}

export default Wrapper;