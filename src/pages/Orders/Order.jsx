import React, { useEffect, useState } from 'react'
import data from '../../services/data.json'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdOutlineEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Order = ({orders,handledelete1}) => {
  const navigate=useNavigate()

  return (
   <>
      <div className="details my-3">
    <h2 className='theme fs-5 fw-bold'> Orders Details</h2>
    <div className="d-flex justify-content-end">
      <button className='btn bg-info'><Link to="/createorder"> <FaPlus className='text-white' /> Add Orders</Link></button>
    </div>
    <hr />
    <div className="table-responsive new">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">ORDER ID</th>
      <th scope="col">NAME</th>
      <th scope="col">PRODUCT</th>
      <th scope="col">AMOUNT</th>
     <th>Actions</th>

    </tr>
  </thead>
  <tbody>
    {orders.map((order)=>(
       <tr key={order.id}>
    
      <td scope="row">ORD{order.id}</td>
           <td>{order.customerName}</td>
      <td>{order.product}</td>
       <td>{order.amount}</td>
     
        <td><div className="d-flex gap-2">
      
        <button className='btn bg-warning btn-sm'  onClick={()=>navigate(`/createorder/${order.id}`) }><MdOutlineEdit className='text-white'/></button>
        <button className='btn bg-danger btn-sm' onClick={()=>handledelete1(order.id)}><MdDelete className='text-white' /></button>
        
        
        </div></td>
          
         

</tr>


    ))}
   
    
  </tbody>
</table>
  
  

    </div>
   </div>

   </>
  )
}
