import React from 'react'

const Dev = () => {
    
  return (
    <div>
        <h1>{import.meta.env.VITE_BACKEND_URL}</h1>
        
    </div>
  )
}

export default Dev