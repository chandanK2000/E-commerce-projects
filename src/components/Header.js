import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import NavLink from "react-bootstrap/esm/NavLink";
// import NavLink from "react-router-dom";
// import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Menu from "@mui/material/Menu";
import { Table } from "@mui/material";

import { useParams } from "react-router-dom";


const Header = () => {
  const getdata = useSelector((state) => state.CartReducer.carts);

  console.log(getdata);

  console.log(getdata);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {pid}=useParams();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink href="/" className="text-decoration-none text-light">
            Add to Cart
          </NavLink>
          <Nav className="mr-auto">
            <NavLink href="/cart" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid  text-light fa-cart-shopping "
              style={{ fontSize: 20, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: "10px" }}
            >
              <Table className="table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Resturant Name</th>
                  </tr>
                </thead>

                <tbody>
                  {getdata.map((e, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <a  href={`/carts/${e.id}`}>
                            <img
                              src={e.imgdata}
                              alt="cart not found"
                              style={{ width: "5rem", height: "5rem" }}
                            />
                          </a>
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>
                            <strong>Price:- ₹</strong> {e.price}
                          </p>
                          <p>
                            <strong>Quantity:- ₹</strong> {e.qnty}
                          </p>
                          <p
                            style={{
                              cursor: "pointer",
                              fontSize: "20px",
                              color: "red",
                            }}
                          >
                            <i className="fas fa-trash smalltrash"></i>
                          </p>
                        </td>
                        <td>
                          <p
                            style={{
                              cursor: "pointer",
                              fontSize: "20px",
                              color: "red",
                            }}
                          >
                            <i className="fas fa-trash"></i>
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

                <p className="text-center">Total:- ₹ 300</p>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ padding: "10px", width: "15rem", position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                style={{
                  position: "absolute",
                  top: 2,
                  right: 5,
                  fontSize: 23,
                  cursor: "pointer",
                }}
                onClick={handleClose}
              ></i>
              <p>Your cart is empty</p>
              <img
                src="images/cart.gif"
                alt="cart empty"
                className="cardDetails_img"
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
          )}
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
