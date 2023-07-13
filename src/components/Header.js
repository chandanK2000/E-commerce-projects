import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Menu from "@mui/material/Menu";
import { Table } from "@mui/material";
import { Link } from "react-router-dom";

import { DEL } from "../redux/action/action";
import { useDispatch } from "react-redux";

const Header = () => {

  const [price,setprice]=useState(0);
  console.log(price);
  const getdata = useSelector((state) => state.CartReducer.carts);
  // console.log(getdata);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // delete for

  const dispatch=useDispatch()
  const del=(id)=>{
    dispatch(DEL(id));
  }

   // for the total price;

   const Total=()=>{
    let price=0;

    getdata.map((ele,k)=>{
      return(
        price=ele.price + price

      )  

    })
    setprice(price);

  }

  useEffect(()=>{
    Total();
  });

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="text-decoration-none text-light">
            Add to Cart
          </Link>
          <Nav className="mr-auto m-2">
            <Link to="/cart" className="text-decoration-none text-light">
              Home
            </Link>
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
                          <Link to={`/carts/${e.id}`} onClick={handleClose}>
                            <img
                              src={e.imgdata}
                              alt="cart not found"
                              style={{ width: "5rem", height: "5rem" }}
                            />
                          </Link>
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
                            <i className="fas fa-trash"  onClick={()=>del(e.id)}></i>
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

                <p className="text-center">Total:- ₹ {price}</p>
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
