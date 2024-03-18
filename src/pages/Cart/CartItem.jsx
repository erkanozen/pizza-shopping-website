import "./CartItem.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeItem, increase , decrease } from "../../store/Control/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-container">
      <div className="cart-info-container">
        <img className="cart-image" src={item.img} alt="" />
        <div className="cart-info-head">
          <h4 className="cart-name">{item.name}</h4>
          <p className="cart-info">{item.info}</p>
          <p className="cart-price">{item.price} TL</p>
        </div>
      </div>
      <div className="cart-count">
        <button className="button-minus">
          <CiCircleMinus onClick={()=> dispatch(decrease(item.id))} className="cart-minus" />
        </button>
        <span className="cart-amount">{item.quantity}</span>
        <button className="button-plus">
          <CiCirclePlus
            onClick={() => dispatch(increase(item.id))}
            className="cart-plus"
          />
        </button>
      </div>
      <div className="cart-price-container">
        <FaRegTrashCan
          onClick={() => dispatch(removeItem(item.id))}
          className="cart-trash"
        />
      </div>
    </div>
  );
};

export default CartItem;
