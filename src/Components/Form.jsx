import React, { useState } from 'react'

const Form = () => {
  const[name,setName] = useState();
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const[cpassword,setCpassword] = useState()

  // console.log(name);
  const handelSubmit = (event)=>{
       event.preventDefault();

       if (name && email && password && cpassword) {
        
          if (password === cpassword) {
            alert("Sign up Successfully");

          }else{
             alert("Password or Confrim Password are not Equal")
          }
          
       }  else{
          alert("All fileds are requride");
       }      
     
  }
  return (
    <div> 
    <form onSubmit={handelSubmit}>
    <p className='heading'>Sign Up</p>
       <div>
           <p className='fieldName'>Name</p>
           <input type='text' onChange={(event)=>setName(event.target.value)}/>
           <p  className={name ? "data" : "noData"}>{name ? "" : "Name is Requried"}</p>
       </div>
       <div>
           <p className='fieldName'>Email</p>
           <input type='email'  onChange={(event)=>setEmail(event.target.value)}/>
           <p  className={email ? "data" : "noData"}>{email ? " " : "Email is requrid"}</p>
       </div> 
       <div>
           <p className='fieldName'>Password</p>
           <input type='password'  onChange={(event)=>setPassword(event.target.value)}/>
           <p  className={password ? "data" : "noData"}>{password ? "" : "Password is requried"}</p>
       </div>
       <div>
           <p className='fieldName'>Confirm Password</p>
           <input type='password'  onChange={(event)=>setCpassword(event.target.value)}/>
           <p   className={cpassword ? "data" : "noData"}>{cpassword ? "" : "Confirm Password is Reqired"}</p>
       </div>
       <div>
           <button>Sign Up</button>
       </div>
    </form>
    </div>
  )
}

export default Form
