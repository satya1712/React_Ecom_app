import { useContext ,useState} from "react";
import { UserContext } from "./UserContext";
import React from 'react'
// import { UserContext } from "./UserContext";
export const Updateuser = () => {
    const {updateUser} = useContext(UserContext);
    const [name,setname] = useState("");
    const handlesubmit = (e) =>{
        e.preventDefault();
        if(name.trim()){
            updateUser(name);
            setname("");
        }
    }
  return (
    <div>
        <h1>Update User</h1>
        <form onSubmit={handlesubmit}>
            <label >Name</label>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Update User"/>
            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default Updateuser;