import { NavLink } from "react-router-dom";
import { FaAddressBook, FaBars, FaBitcoin, FaBusinessTime, FaHome,  FaMoneyBill,  FaUser, FaUsers } from "react-icons/fa";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import { CgSlack } from "react-icons/cg";
import img from '../assets/5000718_application_online_logo_k_kik_icon.png'

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/students",
    name: "Students",
    icon: <FaUsers />,
    subRoutes: [
      {
        path: "/addstudents",
        name: "Add Students ",
        icon: <FaUser />,
      },
      {
        path: "/viewStudents",
        name: "viewstudent",
        icon: <FaAddressBook />,
      },
      
    ],
  },
  {
    path: "/Employess",
    name: "Employees",
    icon: <FaUsers />,
    exact: true,
    subRoutes: [
      {
        path: "/addemployeespage",
        name: "Add Employees ",
        icon: <FaUser />,
      },
      {
        path: "/viewempolyees",
        name: "View Employees",
        icon: <FaAddressBook />,
      },
    
    ],
  },
  {
    path: "/settings",
    name: "Billing",
    icon: <AiTwotoneFileExclamation />,
    exact: true,
    subRoutes: [
      {
        path: "/gst_bill",
        name: "Tax-Invioce ",
        icon: <FaBitcoin />,
      },
      {
        path: "/non_gst",
        name: "Non-Tax Invoice",
        icon: <FaMoneyBill />,
      },
      {
        path: "/addcustomer",
        name: "Add Customers",
        icon: <FaUsers />,
      },
      {
        path: "/viewcustomers",
        name: "View Customers",
        icon: <FaBusinessTime />,
      },
    ],
  },
  
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
 

  return (
    <>
      <div className="main-container">
        <div className="sidebar">
          <div className="top_section">
              {isOpen && (
                <h1 className="logo" ><img src={img}/> KITKAT</h1>
              )}

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>   

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    isOpen={isOpen}
                  />
                );
              }
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active" >

                  <div className="icon">{route.icon}</div>
                    {isOpen && (
                      <div className="link_text">
                        {route.name}
                      </div>
                    )}
                </NavLink>
              );
            })}
          </section>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
