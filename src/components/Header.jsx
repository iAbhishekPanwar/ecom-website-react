import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <NavbarBrand>
          <a href="/">Shopping Cart</a>
        </NavbarBrand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a Product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />

              <Badge>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
