import React, { useState } from 'react'

import { useDispatch,useCart } from './ContextReducer'
const Card = (props) => {
  let dispatch=useDispatch();
let options=props.options
let priceoptions=Object.keys(options)
let data=useCart();
const [qty,setqty]=useState(1)
const [size,setsize]=useState("KG")
const finalprice=qty*options[size]
const handleaddtocart=async()=>{
await dispatch({type:"ADD",id:props.fooditem._id,name:props.fooditem.name,price:finalprice, qty:qty, size:size})
console.log(data)
}
  return (
   
        <div className="card  m-5 w-100 text-light p-4  " style={{'width': '30rem','background-color':'#0c0c0d'}}>
  <img  className="  justify-content-center p-4 m-3 rounded" alt= " " src={props.fooditem.img} style={{'height':'240px','objectFit':'fill'}} />
  <div className="card-body">
    <h5 class="card-title ">{props.fooditem.name}</h5>
    <p class="card-text">{props.fooditem.description }</p>

    <div className='container w-100 border border-success text-center' >
        <select className=' p-1 w-10 bg-success rounded' onChange={(e)=>setqty(e.target.value)}>
            {
                Array.from(Array(6),(e,i)=>
                {
                    return(
                        <option key={i+1} value={i+1}> {i+1}</option>
                    )
                }

                )
            }
        </select>
        <select className='m-2 p-1 w-30 bg-success rounded' onChange={(e)=>setsize(e.target.value )}>
                    {priceoptions.map((data)=>{
                      return <option key={data} value={data}>{data}</option>
                    }) }
               
    
        </select>
        <div className=' w-15 fs-5' >PRICE: {finalprice}</div>
        <hr/>
        <button className='btn text-light border border-light justify-content-center m-2 p-2' onClick={handleaddtocart}>ADD TO CART</button>
        
            </div>
  </div>
</div>
   
  )
}

export default Card