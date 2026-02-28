import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const location = useLocation();

  // Define menu with parent and child routes
  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { 
      name: "Customers", 
      path: "/customer", 
      children: ["/createcus"]  
    },
    { 
      name: "Orders", 
      path: "/order", 
      children: ["/createorder"] 
    }
  ];

  return (
    <>
      <style>{`
        .side{
          background-color:#00445ac7;
          padding:20px;
          color:white;
        }
        a{
          text-decoration:none;
          color:white;
        }
        .active-link{
          background-color: #f0f0f0;
          font-weight: bold;
          color: #000;
        }
          li a{
              display: block;
              padding: 6px;
              border-radius: 7px;}
      `}</style>

      <div className="side text-white p-3 vh-100" style={{width:"250px"}}>
        <h4>My Dashboard</h4>

        <ul className="list-unstyled mt-4 p-0">
          {menu.map((item, idx) => {
            // Check if current URL starts with parent or any child routes
            const active = [item.path, ...(item.children || [])].some(p => 
              location.pathname.startsWith(p)
            );

            return (
              <li className="mb-2" key={idx}>
                <NavLink
                  to={item.path}
                  className={active ? 'active-link' : ''}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};