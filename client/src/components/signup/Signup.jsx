import React, { useState } from 'react'
import "./Signup.css"
import Navbar from "../Navbar.jsx"
import { Link , useNavigate } from 'react-router-dom';

const Signup = () => {
   
  const [crendentials , setCredentials] = useState({
    name:"",
    email:"",
    number:"",
    location:"",
    password:"",
  })

  let navigate = useNavigate();

  const signupHandler = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:8800/signup" , {
      method:"POST",
      headers:{
        "Content-Type" :"application/json"
      },
      body:JSON.stringify({
        name:crendentials.name,
        email:crendentials.email,
        number:crendentials.number,
        location:crendentials.location,
        password:crendentials.password
      })
    });
    const data = await response.json();
    console.log(data);
    if(data.success === false){
      alert("enter valid credentials")
    }
    if(data.success === true){
      navigate("/login");
    }
  }
  const onChange=(e)=>{
   setCredentials({...crendentials , [e.target.name]: e.target.value})
  }


  return (
    <div className='signup_container'>
       <div>
        <Navbar />
      </div>
      <div className='signup_img' method ="post">
        <img src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className='food_img' alt="img_back"/>
      </div>
      <div className='signup_register'>
        <div className='main_register'>
            <form onSubmit={signupHandler}>
                 <div className='user_reg'>
                   <div className='icon_reg'>
                    <i class="fa-solid fa-user fa-beat"></i><br/>
                    <span>Register<i class="fa-solid fa-pencil"></i></span>
                   </div>
                 </div>
                <label htmlFor="name">Username</label><br/>
                <input type = "text" id="name" onChange={onChange} className='field' name="name" placeholder="username" value={crendentials.name}/><br/><br/>

                <label htmlFor="email">Email</label><br/>
                <input type = "email" id="email" onChange={onChange} className='field' name="email" value={crendentials.email} /><br/><br/>

                <label htmlFor="number">Mobile</label><br/>
                <input type = "text" id="number" onChange={onChange} className='field' name="number" value={crendentials.number} /><br/><br/>

                <label htmlFor="pass">Address</label><br/>
                {/* <KeyIcon className="key-icon"/> */}
                <input type = "text" id="pass" onChange={onChange}  className='field' name="location" placeholder="at least 6 char" value={crendentials.location}/><br/><br/>

                <label htmlFor="cpass">Password</label><br/>
                {/* <KeyIcon className="key-icon"/> */}
                <input type = "password" id="cpass" onChange={onChange} className='field' name="password" value={crendentials.password} /><br/><br/>

                <button type = "submit" className="login-btn btn11">Register</button>
                <br/>
                


            </form>
            <h4 className='already-acc'> Already have an account ? <Link to = "/login" >Login</Link></h4>
            
            <button className="login-btn btn12">Sign up with Google</button>

        </div>
      </div>
      
    </div>
  )
}

export default Signup
