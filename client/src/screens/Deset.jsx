import Navbar from "../components/Navbar";
import CardD from "../components/CardD";
import '../components/Navbar.css';
import React from 'react'

export default function Deset() {
  return (
    <div>
      {/* <-------------------Navbar------------------> */}

      <div>
        <Navbar />
      </div>

      <div className="m-4 card-card">
        <CardD/>
        <CardD/>
        <CardD/>
        <CardD/>
        <CardD/>
        <CardD/>
        <CardD/>
        <CardD/>
        <CardD/>
        <CardD/>
        <CardD/>
        <CardD/>
        <CardD/>
        <CardD/>
      </div>
    </div>
  )
}
