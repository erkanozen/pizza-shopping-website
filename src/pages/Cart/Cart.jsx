import "./Cart.css";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../../store/Control/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const menunavigate = useNavigate();
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const menuHandleClick = () => {
    setTimeout(() => {
      menunavigate("/menu");
    }, 200);
  };
  return (
    <div className="cart">
      <h3 className="cart-title">Sepetim</h3>
      {cartItems.length === 0 && (
        <h2 className="cart-empty">Sepetiniz Boş !!!</h2>
      )}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="cart-total-container">
        <div className="cart-total-head">
          <p>Toplam Tutar :</p>
          <span>{totalPrice} TL</span>
        </div>
        <div className="cart-total-button">
          <button
            onClick={() => dispatch(clearItem())}
            className="cart-clear-button"
          >
            Sepeti Boşalt
          </button>
          <button className="cart-order-button">Sipariş ver</button>
        </div>
        <div>
          <button onClick={menuHandleClick} className="cart-continue-button">
            Alışverişe Devam Et
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
