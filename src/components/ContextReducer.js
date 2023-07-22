import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
    switch(action.type)
    {
        case "ADD":
            return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
        case "REMOVE":
            let newarr=[...state]
            newarr.splice(action.index,1)
            return newarr
        case "DROP":
            let empArray=[]
            return empArray    
            default:
                console.log("ERROR IN REDUCER")
    }
}
export const  CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[])
    return (
        <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children }
        </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}
export const useCart=()=>useContext(CartStateContext);
export const useDispatch=()=>useContext(CartDispatchContext)