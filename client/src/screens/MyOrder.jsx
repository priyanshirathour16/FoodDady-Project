import React, { useEffect, useState } from 'react'
import Nabvar from "../components/Navbar"
// import Futer from '../components/Futer'
import { Rating } from '@mui/material';
import "./Cart.css"


const MyOrder = () => {
    const [orderData , setOrderData ] = useState({});
    const fetchMyOrder = async()=>{
        await fetch("http://localhost:8800/myOrderData", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email :localStorage.getItem("userEmail")
            })
        }).then(async(res)=>{
          let response = await res.json();
          console.log(response);
          await setOrderData(response);
        })
    }
    
    useEffect(()=>{
        fetchMyOrder()
    },[])

    return (
        <div>
            <Nabvar />
    
            <div>
            { orderData !== {}  ?  Array(orderData).map((data , index)=>{
                 return(
                    data.orderData ?
                    data.orderData[index].order_data.slice(0).reverse().map(item=>{
                        return(
                            item.map((arrayData) =>{
                                return(
                                <div className='cart_section_main main_section'>
                                {arrayData.order_date || arrayData.order_time ? 

                                    <div className='Date1'>
                                      <h5>{data = arrayData.order_date}  </h5>
                                      <h5>{ data =  arrayData.order_time}</h5> 
                                    </div>
                                    :
                                    <div className='cart_main'>
                                        <div className='cart_main_left'>
                                           <img src= {arrayData.img} alt="food image" />
                                        </div>
                                        <div className='cart_main_right'>
                                             <h1>{arrayData.name} </h1>
                                            <h3>
                                              <Rating name="half-rating" defaultValue={3.7} precision={2.8} />
                                            </h3>
                                            <h3 className='mt-4'> Quantity : {arrayData.qunt} </h3>
                                            <h4 className='mt-2'>Size : {arrayData.size}</h4>
                                            <h4 className='mt-2'>MRP : {arrayData.price}  &#8377;</h4>
                                            <span className='align'>
                                               <h2>{data}</h2>
                                            </span>
                                        </div>
                                    </div>
                                    }
                                </div>
                                    
                                )
                            })
                            )
                        
                    }):" "
                 )
            }) :""}
                

                            
            </div>
          




          {/* <div className='footer1'>
          <Futer />
          </div> */}
            
        </div>
    )
}

export default MyOrder
