import React from 'react'

const Input = ({name,colour,handlechange,value,title}) => {
  return (
    <div>
        <label className="sidebar-label-container">
        <input type="radio"  id="" name={name} value={value} onChange={handlechange}/>
        <span className="checkmark" style={{backgroundColor:colour}}></span>{title}
      </label>
    </div>
  )
}

export default Input