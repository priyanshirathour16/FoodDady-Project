import React from "react";
import { Link , useNavigate } from "react-router-dom";
import "./Navbar.css";
import Badge from "react-bootstrap/Badge"
import logo from "./logo.png"
import { useCart } from "./ContextReducer";



export default function Header() {
  let data= useCart();
  const navigate = useNavigate();
  const logoutHandler = ()=>{
    localStorage.removeItem("authToken");
    navigate('/login')
  }
  return (
    <div className="nav-div">
      <nav className="navbar navbar-expand-lg navbar-dark  py-4">
        <div className="container-fluid">
          <Link className="navbar-brand display-4" to="/">
            <b className="nav-margin">FoodDady</b>
          </Link>
          <Link
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
             
             {
              (localStorage.getItem("authToken"))
              ? <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/myorder">
                  My Order
                </Link>
              </li>
              : " "
             }
            </ul>

            {
              (!localStorage.getItem("authToken"))
              ?  <div className=" nav-item main-item">
               <Link className="nav-link active main-item-1" to= '/login' >
                  Login
                </Link>
                <Link className="nav-link active main-item-1" to= '/signup'>
                  Signup
                </Link>
            </div>
            : <div className=" nav-item main-item ">
                  <div className="nav-link active" >
                   <Link to ="/mycart">
                    <button className="btn btn-primary fs-3 main-item-1 ">
                       My Cart
                    </button> 
                    <Badge pill="danger" className="fs-6" style={{marginLeft:"-5px"}}>{data.length}</Badge>
                   </Link>
                  </div>
                  <div>
                    <button className="btn btn-primary fs-3 mt-2  " onClick={logoutHandler}>
                      Logout
                    </button> 
                  </div> 
                 
            </div>
            }
          </div>
        </div>
      </nav>
    </div>
  
  );
}
