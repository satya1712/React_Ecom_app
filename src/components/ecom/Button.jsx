import React from 'react'

const Button = ({handleclick,value,title}) => {
  return (
    <div>
        <button className="btns" value={value} onClick={handleclick} >{title}</button>
    </div>
  )
}

export default Button