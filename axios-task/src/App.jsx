/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './Components/UserCard';
import { DataState } from './context/AppContext';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

function App() {
  
  const [data,setData] = useState([]);
  const [showAdd,setShowAdd] = useState(false); // To Show ADD Box
  const [showEdit,setShowEdit] = useState(false); // To Show Edit Box
  const [editId,setEditId] = useState(""); // To get Editable Data's ID
  
  const {getUser} = DataState(); //Axios API Get Method

  //Initial rendering on mount 
  useEffect(()=>{
    const tempData = getUser();
    tempData.then((data) => {
      setData(data);
    })
  },[])

  return (
    <div className='relative flex flex-col min-h-screen px-1 py-5 mx-auto sm:px-5 sm:w-11/12 bg-slate-400'>
      <div className='mb-8'>
        {/* Controlling Add BOX and Add Button */}
        <div>
          {showAdd ? 
          <AddUser
          setShowAdd={setShowAdd}
          setShowEdit = {setShowEdit}
          data = {data}
          setData = {setData}
          />
          : ""          
          }
        </div>

        <div className='flex flex-row justify-end'>
          {(showAdd) ? 
          ""
          : <button onClick={() => {
            setShowAdd(true)
            setShowEdit(false)
          }}
          className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
          >Add User</button>
          }
        </div>
      </div>

      {/* Controlling Edit Box */}
      <div>
        {showEdit ?
        <EditUser
        setShowEdit = {setShowEdit}
        editId = {editId}
        data = {data}
        setData={setData}
        />
        :""
        }
      </div>


      {/* Creating Card for each data */}
      <div className='grid w-11/12 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 mx-auto lg:grid-cols-3 sm:grid-cols-2'>
        {data?.map((d,idx) => 
          <UserCard
          key={idx}
          id={d.id}
          d = {d}
          data={data}
          setShowEdit={setShowEdit}
          setShowAdd = {setShowAdd}
          setEditId = {setEditId}
          setData={setData}
          />
        )}
      </div>
    </div>
  )
}

export default App