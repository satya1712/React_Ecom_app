import React from 'react'
import './Colours.css'
import Input from '../../Input'
const Colours = ({handlechange}) => {
  return (
    <div className='color-sidebar'>
        <h2 className="sidebar-title">
      Colour
    </h2>
    <div>
    <label  className="sidebar-label-container">
        <input type="radio" className='all'  id="" name="test3" value=""  onChange={handlechange} />
        <span className="checkmark" ></span> All
      </label>
      <Input handlechange = {handlechange} colour="black" name="test3" value="black" title="Black" />
      <Input handlechange = {handlechange} colour="red" name="test3" value="red" title="Red" />
      <Input handlechange = {handlechange} colour="blue" name="test3" value="blue" title="Blue" />
      <Input handlechange = {handlechange} colour="green" name="test3" value="green" title="Green" />
      
    </div>
    </div>
  )
}

export default Colours