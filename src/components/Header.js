import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark text-white py-3 text-center">
      <h1>Cyberbullying Chatbot Support</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/laws" className="nav-link" activeClassName="active">
                Laws
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faq" className="nav-link" activeClassName="active">
                FAQs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
