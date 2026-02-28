import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { MainLayout } from '../Layout/MainLayout'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Order } from '../pages/Orders/Order'
import { Customer } from '../pages/Customer/Customer'
import { CreateCus } from '../pages/Customer/CreateCus'
import data from '../services/data.json'
import { useState } from 'react'
import { CreateOrder } from '../pages/Orders/CreateOrder'


export const AppRoute = () => {
       const [customers, setCustomers] = useState(()=>{
        const stored = localStorage.getItem("customers");
    return stored ? JSON.parse(stored) : data.customers;
       });
       

  const addCustomer = (newCustomer) => {
    setCustomers((prev) => [...prev, newCustomer]);
  };
  const deleteCustomer=(id)=>{
     const deleted=customers.filter((cus)=>cus.id!==id)
     setCustomers(deleted)
  }
const updateCustomer = (updatedCustomer) => {

 const updatedList = customers.map((cus) =>
   cus.id === updatedCustomer.id
     ? updatedCustomer
     : cus
 );

 setCustomers(updatedList);

};




  const [order,setOrder]=useState(()=>{
    const details=localStorage.getItem("orders")
    return details ? JSON.parse(details ):data.orders;
  })

  const addorder=(neworder)=>{
    setOrder((prev)=>[...prev,neworder])
  }
const handledelete1=(id)=>{
  const upadtedorder=order.filter((or)=>or.id!==id)
  setOrder(upadtedorder)

}
const updateOrder=(updateOrder)=>{
  const updateList=order.map(or=>or.id===updateOrder.id?updateOrder:or)
setOrder(updateList)
}

  useEffect(()=>{
    localStorage.setItem("customers",JSON.stringify(customers))
    localStorage.setItem("orders",JSON.stringify(order))

  },[customers,order])

  return (
 
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<MainLayout/>}>
    <Route index element={<Navigate to='/dashboard'/>}/>
    <Route path="dashboard" element={<Dashboard orders={order} customers={customers} />} />
         
                    <Route path="customer" element={<Customer customers={customers} deleted={deleteCustomer} />} />
                    <Route path="createcus" element={<CreateCus addCustomer={addCustomer} updateCustomer={updateCustomer} customers={customers}/>}></Route>
                     <Route path="createcus/:id" element={<CreateCus addCustomer={addCustomer} updateCustomer={updateCustomer} customers={customers}/>}></Route>


                     <Route path="order" element={<Order  orders={order} handledelete1={handledelete1} /> } />
                     <Route path="createorder" element={<CreateOrder addorder={addorder}/>}/>
                    <Route path="createorder/:id" element={<CreateOrder addorder={addorder}  updateOrder={updateOrder} orders={order}/>}/>


          </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}
