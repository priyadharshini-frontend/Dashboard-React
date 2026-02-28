import React, { useEffect, useState } from 'react'
import data from '../../services/data.json'
import { useNavigate } from 'react-router-dom'

import { MdOutlineEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, Navigate } from 'react-router-dom';
export const Customer = ({customers,deleted}) => {



  const navigate=useNavigate()

  return (
    <>
    <>
      <div className="details my-3">
            <h2 className='theme fs-5 fw-bold'>Customer Details </h2>

        <div className="addcus d-flex justify-content-end"><Link to="/createcus"><button className='btn btn-info text-white'> <FaPlus className='text-white' /> Add Customer</button></Link></div>
    <hr />
    <div className="table-responsive new">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">CUSTOMER ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">COMPANY</th>
            <th scope="col">STATUS</th>
            <th>ACTION</th>

    </tr>
  </thead>
  <tbody>
    
    {customers.map((cus)=>(
       <tr key={cus.id}>
      <td scope="row">CUSID{cus.id}</td>
           <td>{cus.name}</td>
      <td>{cus.email}</td>
     
      <td>{cus.location}</td>
            <td> <span class={cus.status=="Active"?"badge bg-success":"badge bg-danger"}>{cus.status}</span></td>
            <td>
              <div className="d-flex gap-3">
                <button className='btn bg-warning btn-sm' onClick={()=>navigate(`/createcus/${cus.id}`)}><MdOutlineEdit className='text-white'/></button>
                <button className='btn bg-danger btn-sm ' onClick={()=>deleted(cus.id)}><MdDelete className='text-white' /></button>
              </div>
            </td>


</tr>

    ))}
   

    
  </tbody>
</table>
  
  

    </div>
   </div>
    
    </>
    
    </>
  )
}
