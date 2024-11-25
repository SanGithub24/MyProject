import React from 'react';
import '../Header/NavBarProfile.css';
import { FaShoppingCart } from "react-icons/fa";
import { Badge, Container, Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarProfile = ({ productCount }) => {
  return (
    <nav className="navbp">
      <div className='mainp'>
        <div>
          <Container>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle variant="success" className='carticon'>
                  <FaShoppingCart color="white" fontSize="20px" />
                  <Badge>{productCount}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 }}>
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                  <Dropdown.Divider />
                  <Link to="/cart" className="dropdown-item">
                    <FaShoppingCart /> Cart
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </div>

        <div className='logandreg'>
          <Link to="/prodisplay" className="account">Menu</Link>
        </div>

        <div className='logandreg'>
          <Link to="/account" className="account">My Profile</Link>
        </div>

        <div className='logandreg'>
          <Link to="/login" className="login">Logout</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBarProfile;
