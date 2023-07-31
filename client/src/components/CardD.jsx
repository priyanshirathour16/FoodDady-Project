import React from 'react'
import './Navbar.css'

export default function CardD(props) {
  return (
    <div >
      <div>
        <div
          className="card mt-5 card-shadow"
          style={{ width: "25rem", maxHeight: "360px" , fontSize:"1.2rem" }}
        >
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">{props.foodname}</h5>
            <p className="card-text">
              {props.description}
            </p>
            <div className="container w-100">
              <select className="m-2 h-100 text-white bg-dark rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  text-white bg-dark rounded">
                <option value="Half">Half</option>
                <option value="Full">Full</option>
              </select>

              <div className="d-inline h-100 ">
                <h4 className="d-inline">
                  <b>Total Prize</b>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
