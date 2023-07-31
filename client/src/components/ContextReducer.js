import React, { createContext, useContext, useReducer } from 'react'


const cartStateContext = createContext();
const cartStateDispatch = createContext();

const reducer = (state , action)=>{
   switch(action.type){
    case "ADD":
        return[ ...state ,  {id:action.id ,  name:action.name , price:action.price ,qunt : action.qunt , size:action.size , img :action.img}];
    
    case "REMOVE":
        let newArr = [...state]
        newArr.splice(action.index , 1)
        return newArr;
    
    case "DROP":
        let emptyarr = []
        return emptyarr;
    
    case "UPDATE":
        let arr = [...state]
        arr.find((food , index)=>{
            if(food.id === action.id){
                console.log(food.qunt , parseInt(action.qunt), action.price + food.price)
                arr[index] = {...food , qunt :parseInt(action.qunt)+food.qunt , price : action.price + food.price}
            }
            return arr;
        })
        return arr;

    default:
        console.log("Error in reducer");
   }
}
export const CardProvider = ({children}) =>{
    const [state , dispatch ] = useReducer(reducer,[]);
    return(
<cartStateDispatch.Provider value={dispatch}>
    <cartStateContext.Provider value={state}>
        {children}
    </cartStateContext.Provider>
</cartStateDispatch.Provider>
    )
}

export const useCart =()=> useContext(cartStateContext);
export const  useCartDispatch = () => useContext(cartStateDispatch);
