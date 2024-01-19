import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import CamptimeLogo from "../app/assets/img/Camptime_Logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import UserLoginForm from "../features/user/UserLoginForm";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color="dark" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img
          src={CamptimeLogo}
          alt="Camptime Logo"
          width="40"
          height="40"
          className="float-start"
        />
        <h1 className="mt-1">Camptime</h1>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/directory">
              <i className="fa fa-list fa-lg" /> Directory
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              <i className="fa fa-info fa-lg" /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              <i className="fa fa-address-card fa-lg" /> Contact
            </NavLink>
          </NavItem>
        </Nav>
        <UserLoginForm />
      </Collapse>
    </Navbar>
  );
};

export default Header;
