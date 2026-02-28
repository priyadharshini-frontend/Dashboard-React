import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';





export const CreateCus = ({addCustomer,updateCustomer,customers}) => {

  const {id}=useParams()
  const navigate=useNavigate();



    const [addCus,setAddCus]=useState({
        name:"",
        email:"",
        location:"",
        status:"Active"
    })



    const handleChange=(e)=>{
        const{name,value}=e.target;

        setAddCus({...addCus,[name]:value})
        console.log(addCus)

    }


   

useEffect(() => {
 if (id) {
  const existingCus=customers.find((or)=>or.id.toString()===id.toString())
  setAddCus(existingCus)
   
 }
 else{
  setAddCus(customers)
 }
}, [id,customers]);







  const handleSubmit = () => {
    if (!addCus.name || !addCus.email || !addCus.location) {
  alert("Please fill all fields");
  return;
}






  if (id) {

    // UPDATE existing customer
    updateCustomer(addCus);

  } else {

    // CREATE new customer
    const newCustomer = {
      ...addCus,
      id: "ID" + Date.now().toString().slice(-4)
    };

    addCustomer(newCustomer);
  }

  setAddCus({
    name: "",
    email: "",
    location: "",
    status: "Active"
  });

  navigate("/customer");
};
  return (
    <>
    <div className="d-flex justify-content-center">
        <div className='form'>

       
                <h2 className='theme fs-5 fw-bold mb-3'>Create Customer</h2>
                    <input type="text" className="form-control text-center mb-3" name='name' placeholder="Enter Customer Name" value={addCus.name}  onChange={handleChange}/>
                    <input type="email" className="form-control text-center mb-3 " name='email' placeholder="Enter Customer Email" value={addCus.email}  onChange={handleChange}/>
                    <input type="text" className="form-control text-center mb-3" name='location' placeholder="Enter Location" value={addCus.location}  onChange={handleChange}/>
                    <div className='text-center'>
                    <button className='btn btn-info' onClick={handleSubmit}>
                        {id ? "Update Customer" : "Add Customer"}
                    </button>
                    </div>
                    


           </div>

                


    </div>


    
    </>
  )
}
