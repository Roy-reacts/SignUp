import React from 'react'
import { useState , useEffect } from 'react';
import {db} from './firebase-config';
import {addDoc, collection, getDocs} from 'firebase/firestore';
import  './Signup.css';

function Signup() {
  
    const [newName,setNewName] = useState("");
    const [newEmail,setNewEmail] = useState("abc@xyz.com");
    const [newDob,setNewDob] = useState("date");
    const [newPass,setNewPassword] = useState("");
    const [newGen,setGender] = useState("");

    const [users, setUsers] = useState([]);
    const userCollectionRef = collection (db,"users");
    {users.map((user)=> { 
    const createUser = async () => {
        await addDoc(userCollectionRef,{name:newName, email : newEmail, dob : newDob, pass : newPass,pass : newPass,gen : newGen });

    };
    useEffect(()=> {
    const getUsers = async () => {
        const data = await getDocs(userCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsers();
  },[]);
    return (
        <div>
            <div className='body'>
                <h1>Sign In</h1>
            <div className='card'>
                

            <input type="text" placeholder='name' onChange={(event)=> {setNewName(event.target.value);}}/>
           
            <input type="email" placeholder='email' onChange={(event) => {setNewAge(event.target.value);}}/>
            
            <input type="date" placeholder='date of birth'onChange={(event) => {setNewDob(event.target.value);}}/>
            
            
            <input type="password" placeholder='password'onChange={(event) =>{setNewPassword(event.target.value);}}/>
            
     
            <input type="password" placeholder='retype password' ></input>
         
            <label for="R1">Male</label>
            <input type="Radio" name="Gender" id="R1" value="Male" onChange={(event) => {setGender(event.target.value);}}/>
            <label for="R2">Female</label>
            <input type="Radio" name="Gender" id="R2" value="Female" onChange={(event) => {setGender(event.target.value);}} />
           

          <button >Sign Up</button>  
          
          </div>       
          </div>
        </div>
    );
})}

export default Signup
