import React, { use, useState,useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const CreateOrder = ({addorder,orders,updateOrder}) => {
    


    const {id}=useParams();
    

    const navigate=useNavigate()
    const [order,setOrder]=useState({
        
        customerName:"",
        product:"",
        amount:"",
    
    })
    useEffect(() => {

    if (id) {
        console.log(id)

      const existingOrder = orders.find(
        (or) => or.id.toString()== id.toString()
      
      )
       

      if (existingOrder) {
        setOrder(existingOrder)
      }

    }

  }, [id, orders])


    const handlechange=(e)=>{
        const{name,value}=e.target;
        setOrder({...order,[name]:value})
        console.log(order)
   

    }

const handlesubmit=()=>{
     if (!order.customerName || !order.product || !addCus.amount) {
  alert("Please fill all fields");
  return;
}

  if (isNaN(order.amount) || order.amount <= 0) {
  alert("Enter a valid amount");
  return;
}
    if(id){
        updateOrder(order)

    }else{
        const neworder={
    ...order,id:Date.now().toString().slice(-4)
   }
   addorder(neworder)

    }
   
   navigate('/order')
}




  return (
  <>
  <div className="d-flex justify-content-center">
        <div className='form'>

       
                <h2 className='theme fs-5 fw-bold mb-3 text-center'>{id?"Update Order":"Create Order"}</h2>
                    <input type="text" className="form-control text-center mb-3" name='customerName' placeholder="Enter Customer Name" onChange={handlechange} value={order.customerName} />
                    <input type="text" className="form-control text-center mb-3" name='product' placeholder="Enter Product" onChange={handlechange} value={order.product}/>
                    <input type="text" className="form-control text-center mb-3" name='amount' placeholder="Enter Amount" onChange={handlechange} value={order.amount}/>

                    <div className='text-center'>
                    <button className='btn btn-success fw-bold text-white'onClick={handlesubmit}> 
                        {id?'Update':'SUBMIT'}
                    </button>
                    </div>
                    


           </div>

                


    </div>

  
  </>
  )
}
