/* eslint-disable react/prop-types */
import { createContext,useContext } from "react";
import { getUser, deleteUser, postUser, editUser } from "../helper/helpers";

const ContextData = createContext(null);
// API Methods Collection for easy use across the component
function AppContext({children}){
    return(
        <ContextData.Provider
        value={
            {
                getUser,
                deleteUser,
                postUser,
                editUser,
            }
        }
        >
            {children}
        </ContextData.Provider>
    );
}

export const DataState = () =>{
    return useContext(ContextData)
}

export default AppContext;
