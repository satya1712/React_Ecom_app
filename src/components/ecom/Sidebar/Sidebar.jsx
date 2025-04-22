import React from 'react'
import Category from './Category/Category'
import Colours from './Collours/Colours'
import Price from './Price/Price'
import './Sidebar.css'

const Sidebar = ({handlechange}) => {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>
        <Category handlechange = {handlechange}/>
      <Price handlechange = {handlechange}/>
      {/* <Colours handlechange = {handlechange}/> */}
    </section>
    </>
  )
}

export default Sidebar