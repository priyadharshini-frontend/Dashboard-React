import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";




export const Dashboard = ({orders,customers}) => {
  const totalorder=orders.length;
   const totalCustomer=customers.length;
 let totalIncome = 0;
orders.forEach(order => {
  totalIncome += Number(order.amount);
});
  return (
   <>
   <style>
    {
      `
      .card-body{
      background:#00968840;
      }
      `
    }
   </style>
   <div className="row">
    <div className="col-md-4 mb-2">
       <div className="card shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
            <h5 className="card-title">Total Orders</h5>
        <h2>{totalorder}</h2>

        </div>
        <div>
           <FaCartArrowDown className='fs-1'/>
        </div>
      
       

      </div>
    </div>

    </div>
    <div className="col-md-4 mb-2">
       <div className="card shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
        <h5 className="card-title">Total Customers</h5>
        <h2>{totalCustomer}</h2>
        </div>
        <div>
          <MdPeople className='fs-1' />

        </div>
        
      </div>
    </div>

    </div>
    <div className="col-md-4 mb-2">
       <div className="card shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
           <h5 className="card-title">Total Income</h5>
        <h2>{totalIncome}</h2>

        </div>
       
        <div>
          <FaRupeeSign className='fs-1' />

        </div>
      </div>
    </div>

    </div>
   </div>
   <div className="details my-3">
    <h2 className='theme fs-5 fw-bold'>Recent Orders</h2>
    <hr />
    <div className="table-responsive new">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">ORDER ID</th>
      <th scope="col">CUSTOMER</th>
      <th scope="col">PRODUCT</th>
      <th scope="col">AMOUNT</th>
    </tr>
  </thead>
  <tbody>
    {orders.map((order)=>(

 <tr key={order.id}>
      <td scope="row">{order.id}</td>
      <td>{order.customerName}</td>
      <td>{order.product}</td>
      <td>{order.amount}</td>

    </tr>

    ))}
   
   

    
  </tbody>
</table>
  
  

    </div>
   </div>
  
   </>
  )
}
