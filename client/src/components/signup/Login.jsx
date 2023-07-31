import React, { useState } from 'react'
import "./Signup.css"
import Navbar from "../Navbar.jsx"
import { Link  , useNavigate} from 'react-router-dom';

const Login = () => {
    const [crendentials , setCredentials] = useState({
        email:"",
        password:"",
      })

    let navigate = useNavigate();

    const loginHandler = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8800/login" , {
          method:"POST",
          headers:{
            "Content-Type" :"application/json"
          },
          body:JSON.stringify({
            email:crendentials.email,
            password:crendentials.password
          })
        });
        const data = await response.json();
        console.log(data);

        if(data.success === false){
          alert("enter valid credentials")
        }
        if(data.success === true){
          localStorage.setItem("userEmail" , crendentials.email);
          localStorage.setItem("authToken" , data.authToken);
          console.log(localStorage.getItem("authToken"));
          navigate("/")
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
            <form onSubmit={loginHandler} method='post'>
                 <div className='user_reg'>
                   <div className='icon_reg'>
                    <i class="fa-solid fa-right-to-bracket fa-beat"></i><br/>
{/*                     
                    <span>Register<i class="fa-solid fa-pencil"></i></span> */}
                   </div>
                 </div>

                 <label htmlFor="email">Email</label><br/>
                <input type = "email" id="email" onChange={onChange} className='field' name="email" value={crendentials.email} /><br/><br/>
                

                <label htmlFor="cpass">Password</label><br/>
                {/* <KeyIcon className="key-icon"/> */}
                <input type = "password" id="cpass" onChange={onChange} className='field' name="password" value={crendentials.password} /><br/><br/>

                <button type = "submit" className="login-btn btn11">Login</button>
                <br/>
                


            </form>
            <h4 className='already-acc'> No Account  ? <Link to = "/signup" >Signup</Link></h4>
            
            <button className="login-btn btn12">Login with Google</button>

        </div>
      </div>
      
    </div>
  )
}

export default Login
