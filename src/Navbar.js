import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ switchColor, colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null); // reference for sidebar

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className={colors ? "navbar-light nav-desk" : "navbar-dark nav-desk"}>
        <div className="desk-nav">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="back">
                  <div className="flex-items-nav">
                    {/* Brand */}
                    <ul>
                      <li className="fixeolor">
                        <h5 className="pink-red">Portfolio</h5>
                      </li>
                    </ul>

                    {/* Desktop Menu */}
                    <ul className="list-of-nav">
                      <Link to="/Home"><li>HOME</li></Link>
                      <Link to="/Project"><li>PROJECTS</li></Link>
                      <Link to="/Contactus"><li>CONTACT ME</li></Link>
                      <li>
                        <div className="form-check form-switch switchs">
                          <input
                            className="form-check-input "
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            onChange={switchColor}
                          />
                        </div>
                      </li>
                    </ul>

                    {/* Hamburger (Mobile) */}
                    <div className="form-check form-switch switchs mobile-switches">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onChange={switchColor}
                      />
                    </div>
                    <div
                      className={`hamburger ${isOpen ? "hide" : ""}`}
                      onClick={() => setIsOpen(true)}
                    >
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>

                    {/* Sidebar for mobile */}

                    <div
                      ref={sidebarRef} // attach ref here
                      className={`side-menu ${isOpen ? "open" : ""}`}
                    >
                      {/* Close Button */}
                      <div className="close-btn" onClick={() => setIsOpen(false)}>×</div>
                      <ul>
                        <Link to="/Home"><li onClick={() => setIsOpen(false)}>HOME</li></Link>
                        <Link to="/Project"><li onClick={() => setIsOpen(false)}>PROJECTS</li></Link>
                        <Link to="/Contactus"><li onClick={() => setIsOpen(false)}>CONTACT ME</li></Link>
                        <li>

                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
