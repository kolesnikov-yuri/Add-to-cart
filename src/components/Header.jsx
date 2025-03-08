import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const { cart } = useSelector((state) => state.updateCart);
  console.log(cart.length);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container className="text-white">
          <Navbar.Brand href="#home">Add to cart Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100">
              <NavLink to="/" className={"text-decoration-none text-white"}>
                Product
              </NavLink>
              <NavLink className="w-100 text-decoration-none text-white">
                <Badge
                  badgeContent={cart.length}
                  color="primary"
                  style={{ float: "right" }}
                >
                  <ShoppingCartIcon onClick={handleClick} />
                </Badge>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          {cart.length === 0 ? (
            <div>Your carts is empty</div>
          ) : (
            <div>use cart</div>
          )}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
