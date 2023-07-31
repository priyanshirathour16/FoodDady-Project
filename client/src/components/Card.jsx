import React, { useEffect, useState , useRef} from "react";
import './Navbar.css'
import { useCartDispatch , useCart } from "./ContextReducer";

export default function Card(props) {

  let dispatch = useCartDispatch();
  let data = useCart();

  let options =  props.option;
  let priceoption = Object.keys(options);
  const priceref = useRef();
  const [qunt , setqunt] = useState(1);
  const [size , setSize] = useState("");

  const handleAddToCart = async()=>{

    let food = [];
    for(const item of data ){
      if(item.id === props.fooditem._id){
        food = item;
        break;
      }
    }
    if(food !== []){
      if(food.size === size){
        await dispatch({type:"UPDATE" , id:props.fooditem._id , price : finalPrice , qunt :qunt})
        return;
      }
      else if(food.size !== size){
        await dispatch({type :"ADD" , id:props.fooditem._id, name:props.fooditem.name , price:finalPrice ,qunt :qunt , size:size , img : props.fooditem.img})
        return;
      }
      return
    }
      await dispatch({type :"ADD" , id:props.fooditem._id, name:props.fooditem.name , price:finalPrice ,qunt :qunt , size:size , img : props.fooditem.img})
    }
     // await console.log(data);

  useEffect(()=>{
    // console.log("final prize" + finalPrice);
    setSize(priceref.current.value);
  } ,[])

 
  let finalPrice = qunt*parseInt(options[size]);
  return (
    <div >
      <div>
        <div className="card mt-5 card-shadow"
          style={{ width: "25rem", maxHeight: "360px" , fontSize:"1.2rem" }}
        >
          <img src={props.fooditem.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">{props.fooditem.name}</h5>
            <div className="container w-100">
              <select className="m-1 h-100 text-white bg-dark rounded" onChange={(e)=>setqunt(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  text-white bg-dark rounded" ref={priceref} onChange={(e)=>setSize(e.target.value)}>
                {
                  priceoption.map((option)=>{
                     return(
                      <option key={option} value={option}>{option}</option>
                     )
                  })
                }
              </select>

              <div className="d-inline h-100 ">
                <h4 className="d-inline">
                  <b>&#8377;{finalPrice}/-</b>
                </h4>
              </div>
            </div>
            <hr/>
            <button className="add-to-cart btn btn-primary" onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
  
      </div>
    </div>
  );
}
