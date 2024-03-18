import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const cartNavigate = useNavigate();
  return (
    <div className="navbar-container">
      <img className="nav-image" src="/public/pızza.png" alt="" />
      <div className="nav-right-container">
        <ul className="nav-link-head">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/aboutUs">AboutUs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <FaFire className="icon-fire" />
        </ul>
      </div>
      <div
        onClick={() => cartNavigate("/cart")}
        className="navbar-cart-container"
      >
        <span className="navbar-cart">Sepet</span>
        <BsCart2 className="navbar-cart-icons" />
        <span className="navbar-cart-amount">{cartItem.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
