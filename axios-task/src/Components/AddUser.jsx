/* eslint-disable react/prop-types */

import { useState } from "react"
import { DataState } from "../context/AppContext";


const AddUser = ({setShowAdd,data,setData}) => {

    const [inptitle,setInptitle] = useState("");
    const [inpauthour,setInpauthour] = useState("");
    const [inpisbn,setInpisbn] =useState("");
    const [inpdate,setInpdate] =useState("");
    const [inpname,setInpname] = useState("");
    const [inpbirthdate,setInpbirthdate] =useState("");
    const [inpbio,setInpbio] =useState("");

    const {postUser} = DataState();

    //Adding New User
    function handleAddUser(){
        const newUser = {
            title: inptitle || "No Title",
            authour: inpauthour || "No Authour Name",
            isbn: inpisbn || "No ISBN number",
            date: inpdate || "No date",
            bio: inpbio || "No biography",
            name: inpname || "No  Name",
            birthdate: inpbirthdate || "No birthdate",
            
        }
        let newData = postUser(newUser);
        newData.then((newUserData) => setData([...data,newUserData]));
        setShowAdd(false);
    }

  return (
    <div className="flex flex-col w-full gap-5 px-3 mx-auto xl:w-2/6 lg:w-3/6 md:w-3/6 sm:w-4/6 xs:w-5/6 xs:max-w-[400px] sm:max-w-none"> 
        <h1 className="font-bold text-center font-xs">ADD NEW USER</h1>

        <input type="text" placeholder="Enter book title" value={inptitle}
        onChange={(e) => setInptitle(e.target.value)}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        />

        <input type="text" placeholder="Enter Authour Name" value={inpauthour}
        onChange={(e) => setInpauthour(e.target.value)}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        />

        <input type="text" placeholder="Enter ISBN no" value={inpisbn}
        onChange={(e) => setInpisbn(e.target.value)}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        />

        <input type="date" placeholder="Enter Publication date" value={inpdate}
        onChange={(e) => setInpdate(e.target.value)}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        />

        <input type="text" placeholder="Enter Authour Name" value={inpname}
        onChange={(e) => setInpname(e.target.value)}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        />

        <input type="date" placeholder="Enter Authours dob" value={inpbirthdate}
        onChange={(e) => setInpbirthdate(e.target.value)}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        />

        <input type="text" placeholder="Enter bio" value={inpbio}
        onChange={(e) => setInpbio(e.target.value)}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
        />


        <div className="flex flex-row items-center justify-center gap-5">
            
            <button onClick={()=> {
                setShowAdd(false)
            }}
            className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
            >
                Cancel
            </button>

            <button onClick={handleAddUser}
            className="px-3 py-1 text-white bg-green-400 rounded hover:bg-green-700"
            >
                Add User
            </button>
        </div>
    </div>
  )
}

export default AddUser