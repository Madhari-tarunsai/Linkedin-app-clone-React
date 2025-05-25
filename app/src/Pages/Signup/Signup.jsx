import React, { useState } from 'react';
import './Signup.css';
import { auth, database } from '../../FireBase/FireBase';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';


const Signup = () => {
  const navigate=useNavigate()
  const [Signup,setSignup]=useState({name:"",password:'',email:'',role:''})
  const handlerSubmit=async(e)=>{
     e.preventDefault();
     try{
      const accountCreate=await createUserWithEmailAndPassword(auth,Signup.email,Signup.password,Signup.role)
       console.log(accountCreate,"created")

       await updateProfile(accountCreate.user,{displayName:Signup.name})
      alert('register sucessfully')
      // await doc(database,`${Signup.role}s`,Signup.name)
      await setDoc(doc(database,`${Signup.role}s`,Signup.name),{name:Signup.name,password:Signup.password,role:Signup.role,id:Date.now()})

      navigate('/login')

     }
     catch(err){
      alert('error please check and try once again')
      console.log(err)
     }
   

  }
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-image">
          <img
            src="https://img.freepik.com/premium-vector/man-sits-chair-with-laptop-potted-plant_1072771-1415.jpg"
            alt="Signup Illustration"
          />
        </div>
        <div className="signup-form">
          <h1>Register</h1>
          <form onSubmit={handlerSubmit}>
            <input type="text" name="name" placeholder="Enter your name" onChange={(e)=>setSignup({...Signup,name:e.target.value})}/>
            <input type="email" name="email" placeholder="Enter your email" onChange={(e)=>setSignup({...Signup,email:e.target.value})}/>
            <input type="password" name="password" placeholder="Enter your password" onChange={(e)=>setSignup({...Signup,password:e.target.value})}/>
            <select id="role" name="role" onChange={(e)=>setSignup({...Signup,role:e.target.value})}>
              <option value="">Choose Role</option>
              <option value="recruiter">Recruiter</option>
              <option value="jobseeker">Jobseeker</option>
            </select>
            <button type="submit">Signup</button>
          </form>
          <p>
            Already a member? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
