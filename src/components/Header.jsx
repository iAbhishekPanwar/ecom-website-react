import React, { useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Badge, Dropdown } from "react-bootstrap";
import { CartState } from "./context/Context";
import { AiFillDelete } from "react-icons/ai";
import AuthContext from "./store/auth-context";

const Header = () => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const key = localStorage.getItem("email");

  const total = cart.reduce((acc, curr) => acc + parseFloat(curr.price), 0);

  return (
    <div>
      <Navbar bg="dark" variant="light" expand="lg">
        <Container>
          <h2 className="text-warning" to="/">
            MaxTechies
          </h2>
          <Link className="text-success mx-3" to="/">
            Home
          </Link>
          <Link className="text-success mx-3" to="/store">
            Store
          </Link>
          <Link className="text-success mx-3" to="/about">
            About
          </Link>
          <Link className="text-success mx-3" to="/contact">
            Contact Us
          </Link>
          {authCtx.isLoggedIn && <h5 style={{ color: "yellow" }}>{key}</h5>}
          {authCtx.isLoggedIn ? (
            <Link className="text-success mx-3" to="/" onClick={logoutHandler}>
              Logout
            </Link>
          ) : (
            <Link className="text-success mx-3" to="/login">
              Login
            </Link>
          )}

          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ left: "auto", right: 0 }}>
              {cart.length > 0 ? (
                cart.map((prod) => (
                  <span className="cartItem" key={prod.id}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="cartItemImage"
                    />
                    <div className="cartItemDetail">
                      <span>{prod.name}</span>
                      <span>{prod.price}</span>
                    </div>
                    {
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    }
                  </span>
                ))
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty</span>
              )}
              {cart.length > 0 && (
                <span className="centered-text">
                  Total: ${Number(total).toFixed(2)}
                </span>
              )}
              <div className="buttonItem">
                {cart.length > 0 ? (
                  <Button onClick={() => alert("Thank you for shopping!")}>
                    Purchase
                  </Button>
                ) : (
                  <Button disabled>Add items to Cart</Button>
                )}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
