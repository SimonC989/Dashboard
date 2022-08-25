import React from 'react'

const Button = ({ color, bgColor, text, borderRadius, size }) => {
  return (
    <button 
      type='button' 
      style={{ backgroundColor: bgColor, color, borderRadius, padding: '8px' }}
      className={ `text-${size} p3 hover:drop-shadow-x1` }  
    >
      {text}
    </button>
  )
}

export default Button