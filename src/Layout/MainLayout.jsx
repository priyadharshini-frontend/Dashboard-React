import React from 'react'
import { Sidebar } from '../components/layout/Sidebar'
import { Navbar } from '../components/layout/Navbar'
import { Outlet } from 'react-router-dom'


export const MainLayout = () => {
  return (
    <>
    <div className="d-flex">
  
            <Sidebar/>

        <div className='flex-grow-1'>
            <Navbar/>
       
            <div className="p-3">
          <Outlet/>
        </div>
        </div>


    </div>
    
    
    </>
  )
}
