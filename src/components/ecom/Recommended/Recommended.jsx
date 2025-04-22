import React from 'react'
import './Recommended.css';
import Button from '../Button';

const Recommended = ({handleclick}) => {
    return (
        <>
            <div>
                <h2 className='reccomended-title'>Reccomended Section</h2>
                <div className="reccomended-flex">
                    <button className='btns' onClick={handleclick} value="">All</button>
                    <Button handleclick = {handleclick} value="sneakers" title="Sneakers" />
                    <Button handleclick = {handleclick} value="flats" title="Flats" />
                    <Button handleclick = {handleclick} value="sandals" title="Sandals" />
                    <Button handleclick = {handleclick} value="heels" title="Heels" />  
                </div>
            </div>
        </>
    )
}

export default Recommended