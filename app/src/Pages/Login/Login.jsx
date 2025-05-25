import React, { useState } from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FireBase/FireBase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const [Login,setLogin] = useState({name:'',email:'',role:''})
  const handlersubmit=async(e)=>{
   e.preventDefault();
   const {email,password,role}=Login
   try{
    const logginedRec=await signInWithEmailAndPassword(auth,email,password)
    alert('sucessfully loggedin')
    if(role==="recruiter"){
      localStorage.setItem("loggInRecruiter",JSON.stringify(logginedRec))
    }else{
      localStorage.setItem("loggInJobseekers",JSON.stringify(logginedRec))
    }
    navigate(`/${role}DashBoard`,);


    

   }catch(err){
    
    console.log(err)
   }

  }
  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handlersubmit}>
          <input type="email" name="email" placeholder="Enter Email" onChange={(e)=>setLogin({...Login,email:e.target.value})} />
          <input type="password" name="password" placeholder="Enter Password"  onChange={(e)=>setLogin({...Login,password:e.target.value})} />
          <select id="role" name="role"  onChange={(e)=>setLogin({...Login,role:e.target.value})} >
            <option value="">Choose Role</option>
            <option value="recruiter">Recruiter</option>
            <option value="jobseeker">Jobseeker</option>
          </select>
          <button type="submit">Login</button>
        </form>
        <p>
          Not a member? <a href="/Signup">Join</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
