import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
import Futer from "../components/Futer";
import Card from "../components/Card";
import '../components/Navbar.css';
import StaticCard from "./StaticCard";
import "./Home.css"

import Navbar from "../components/Navbar"

export default function Home() {
  const [search , setsearch] = useState('');
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loadData = async (e) => {
    let response = await fetch("http://localhost:8800/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();
    setfooditem(data[0]);
    setfoodcat(data[1]);
    // console.log(data[0] , data[1]);
  }
  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="home_section">

      {/* <-------------------Navbar------------------> */}

      <div>
        <Navbar />
      </div>

      {/* <------------------carosal-------------------------> */}

      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption  carosalcaptionstyle" style={{ zIndex: "10" }}>
              <div className="d-flex ">
                <input
                  className="form-control me-2 input-form-changer"
                  type="search"
                  placeholder="search"
                  aria-label="Search"
                  value={search}
                  onChange={e=>{setsearch(e.target.value)}}
                />
                {/* <button
                  className="btn btn-outline-success text-white bg-success"
                  type="submit"
                >
                  Search
                </button> */}
              </div>
              <h1 className="text1">Delecious Food </h1>
              <p className="text2">
                Celebrate summer with our selection of luscious dishes, including
                fresh salads, light main meals and fruity desserts{" "}
              </p>
            </div>

            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900x400/?burger"
                className="d-block w-100 blur"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x400/?pastry"
                className="d-block w-100 blur"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x400/?barbeque"
                className="d-block w-100 blur"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      {/* <--------------body---------------------------> */}
      <div className="m-4 card-div">
          <StaticCard />
      </div>
      {/* ================================ card=========================== */}

      <div className="m-4 card-div">
        {
          foodcat !== []
            ? foodcat.map((itemcat) => {
              return (
                <div className="row mb-3">
                  {/* <div key={itemcat._id} id="btn" className=" cat_name">
                    {itemcat.category_name}
                  </div> */}
                  {/* <hr /> */}
                  {
                    fooditem !== []
                      ? fooditem.filter((itemfood) =>
                        (itemfood.category_name == itemcat.category_name) && (itemfood.name.toLowerCase().includes(search.toLowerCase()))
                      ).map(filteritems => {
                        return (
                          <div key={filteritems._id} className="col-12 col-md-6 col-lg-3">
                            <Card fooditem ={filteritems}
                              option={filteritems.option}
                              
                            ></Card>
                          </div>)
                      })
                      : <div > no such data found</div>
                  }
                </div>
              )
            })
            : ""
        }

      </div>
    {/* <--------------- footer-----------------------> */}

      <div>
        <Futer />
      </div>


    </div>
  );
}
