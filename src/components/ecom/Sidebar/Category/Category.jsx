import React from 'react'
import './Category.css'
import Input from '../../Input'
const Category = ({handlechange}) => {
  return (
   <>
   <div className='category-sidebar'> 
    <h2 className="sidebar-title">
      Category
    </h2>
    <div>
      <label  className="sidebar-label-container">
        <input type="radio"  id="" name="test" value=""   onChange={handlechange}/>
        <span className="checkmark" ></span> All
      </label>
   <Input handlechange = {handlechange}  name="test" value="sneakers" title="Sneakers" />
   <Input handlechange = {handlechange}  name="test" value="flats" title="Flats" />
   <Input handlechange = {handlechange}  name="test" value="sandals" title="Sandals" />
   <Input handlechange = {handlechange}  name="test" value="heels" title="Heels" />
    </div>
   </div>
   </>
  )
}

export default Category