/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { DataState } from "../context/AppContext";


const EditUser = ({setShowEdit,editId,data,setData}) => {

    const [inptitle,setInptitle] = useState("");
    const [inpauthour,setInpauthour] = useState("");
    const [inpisbn,setInpisbn] =useState("");
    const [inpdate,setInpdate] =useState("");
    const [inpname,setInpname] = useState("");
    const [inpZipCode,setInpZipCode] =useState("");
    const [inpbio,setInpbio] =useState("");
    const [inpbirthdate,setInpbirthdate] =useState("");
    
    const {editUser} = DataState();

    //Filling a Details on Edit Box for editing
    useEffect(()=>{
        data.forEach((d) => {
            if(editId === d.id){
                setInptitle(d.title);
                setInpauthour(d.authour);
                setInpisbn(d.isbn);
                setInpdate(d.data);
                setInpname(d.name);
                setInpbirthdate(d.birthdate);
                setInpbio(d.bio);
            }
        });
    },[editId])

    //Updating the Edited data
    function handleEdit(editId){

        setShowEdit(false);
        const editedUser = {
            id:editId,
            title: inptitle || "No Title",
            authour: inpauthour || "No Authour Name",
            isbn: inpisbn || "No ISBN Number",
            date: inpdate || "No date",
            name: inpname || "No authours  Name",
            birthdate: inpbirthdate|| "No birthdate",
            bio: inpbio || "No biography",

        
        }

        editUser(editId,editedUser);  
        let ind;
        let tempUser = data.map((d,idx)=>{
            if(editId === d.id){
                ind=idx;
            }
            return d;
        });

        tempUser[ind] = editedUser;
        setData(tempUser);
    }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-screen p-1 mx-auto bg-white/50">
        <div className="flex flex-col w-full gap-5 px-3 mx-auto xl:w-2/6 lg:w-3/6 md:w-3/6 sm:w-4/6 xs:w-5/6 xs:max-w-[400px] sm:max-w-none bg-slate-500 pb-4 pt-8">
            <h1 className="font-bold text-center font-xs">EDIT USER</h1>

            <input type="text" placeholder="Enter book Name" value={inptitle}
            onChange={(e) => setInptitle(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="text" placeholder="Enter author Name" value={inpauthour}
            onChange={(e) => setInpauthour(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="text" placeholder="Enter ISBN No" value={inpisbn}
            onChange={(e) => setInpisbn(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="date" placeholder="Enter Publication date" value={inpdate}
            onChange={(e) => setInpdate(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="text" placeholder="Enter authours Name" value={inpname}
            onChange={(e) => setInpname(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="date" placeholder="Enter authours dob" value={inpbirthdate}
            onChange={(e) => setInpbirthdate(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="text" placeholder="Enter biography" value={inpbio}
            onChange={(e) => setInpbio(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            
            <div className="flex flex-row items-center justify-center gap-5">

                <button onClick={()=>{
                    setShowEdit(false)
                }}
                className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                >
                    Cancel
                </button>
                
                <button onClick={() => handleEdit(editId)}
                className="px-3 py-1 text-white bg-green-400 rounded hover:bg-green-700"
                >
                    Update User
                </button>
            </div>
        </div>
    </div>
  )
}

export default EditUser
