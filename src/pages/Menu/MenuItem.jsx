import "./MenuItem.css";
import { useDispatch , useSelector } from "react-redux";
import { addItem } from "../../store/Control/CartSlice";

const MenuItem = ({ item }) => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch();
  const findItems = cartItems.find((itm) => itm.id === item.id )
  return (
    <div className="menu-item-container">
      <img className="menu-item-image" src={item.img} alt="" />
      <h2 className="menu-item-title">{item.name}</h2>
      <p className="menu-item-info">{item.info}</p>
      <span className="menu-item-price">{item.price} TL</span>
      <button
      disabled={findItems}
        onClick={() => dispatch(addItem(item))}
        className={`menu-item-button ${findItems && "add-button-active"}`}
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default MenuItem;
