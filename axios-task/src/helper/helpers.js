import Axios from 'axios';
import {API} from './API'


//To get a Data from server 
export async function getUser(){
    const res = await Axios.get(API);
    const data = res.data;
    return data;
}

//Delete the data using ID
export async function deleteUser(id){
    const res = await Axios.delete(`${API}/${id}`);
    return res.data;
}

//To add New User 
export async function postUser(newUser){
    const res = await Axios.post(API,newUser);
    return res.data;
}

//Updated the existinf user
export async function editUser(id,editedUser){
    const res = await Axios.put(`${API}/${id}`,editedUser);
    return res.data;
}
