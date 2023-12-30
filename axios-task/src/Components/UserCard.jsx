/* eslint-disable react/prop-types */
import { DataState } from "../context/AppContext";

const UserCard = ({id,d,data,setData,setShowEdit,setEditId,setShowAdd}) => {

  const {deleteUser} = DataState();


  //Deleting data from both server and screen 
  function handleDelete(id){
    deleteUser(id);
    let tempData = data.filter((d) => id !== d.id);
    setData(tempData);
  }

  return (
    <div className="flex flex-col gap-4 px-3 py-2 bg-sky-900 text-white xs:px-5 xs:py-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md justify-around">
        <h3>BOOK RECORD</h3>
        <p>
            <span>Title: </span>
            <span>{d.title}</span>
        </p>
        <p>
            <span>Authour: </span>
            <span>{d.authour}</span>
        </p>
        <p>
            <span>ISBN NO: </span>
            <span>{d.isbn}</span>
        </p>
        <p>
            <span>Publication date: </span>
            <span>{d.date}</span>
        </p>
        <h3>AUTHORS RECORD</h3>
        <p>
            <span>Author name: </span>
            <span>{d.name}</span>
        </p>
        <p>
            <span>Zip Code: </span>
            <span>{d.birthdate}</span>
        </p>
        <p>
            <span>Biography: </span>
            <span>{d.bio}</span>
        </p>
        

        <div className="flex flex-row items-center justify-start gap-5 sm:gap-0 sm:justify-between">
          <button onClick={() => {
            setShowEdit(true)
            setEditId(id);
            setShowAdd(false)
          }}
          className="px-3 py-1 text-white bg-blue-400 rounded hover:bg-blue-700"
          >
            Edit
          </button>
          
          <button onClick={()=>handleDelete(id)}
          className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-800"
          >
            Delete
          </button>
        </div>
    </div>
  )
}

export default UserCard;
