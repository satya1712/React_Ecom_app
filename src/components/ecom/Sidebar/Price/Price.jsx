import React from 'react'
import './Price.css'
import Input from '../../Input'

const Price = ({handlechange}) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">
        Price
      </h2>
      <div>
      <label  className="sidebar-label-container">
        <input type="radio"  id="" name="test2" value=""   onChange={handlechange}/>
        <span className="checkmark" ></span> All
      </label>
      <Input handlechange = {handlechange}  name="test2" value="50" title="0-50" />
      <Input handlechange = {handlechange}  name="test2" value="100" title="50-100" />
      <Input handlechange = {handlechange}  name="test2" value="150" title="100-150" />
      <Input handlechange = {handlechange}  name="test2" value="200" title="150-200" />
      <Input handlechange = {handlechange}  name="test2" value="" title="200 & Above" />
      </div>
    </div>
  )
}

export default Price