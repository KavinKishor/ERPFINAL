import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const SidebarMenu = ({ route, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
          <div className="icon">{route.icon}</div>
            {isOpen && (
              <div className="link_text">
                {route.name}
              </div>
            )}
        
        </div>
        {isOpen && (
          <div>
            <FaAngleDown />
          </div>
        )}
      </div>
    
        {isMenuOpen && (
          <div className="menu_container">
            {route.subRoutes.map((subRoute) => (
                <NavLink to={subRoute.path} key={subRoute.path} className="link">
                  <div className="icon">{subRoute.icon}</div>
                  <div className="link_text">{subRoute.name}</div>
                </NavLink>
            ))}
          </div>
        )}
     
    </>
  );
};

export default SidebarMenu;
