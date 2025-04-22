import { createContext,useContext,useState } from "react";

const UserContext = createContext();
const UserProvider = ({children}) =>{
    const [user,SetUser] = useState({name:"Ram"});
    const updateUser = (newname)=>{
        SetUser({name:newname});
    }
    return <UserContext.Provider value = {{user,updateUser}}>
        {children}
        
    </UserContext.Provider>

    

}
export {UserContext,UserProvider}