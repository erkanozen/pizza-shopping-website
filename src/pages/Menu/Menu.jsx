import "./Menu.css";
import menudata from "../../helpers/MenuData";
import MenuItem from "./MenuItem";
import { useState } from "react";

const Menu = () => {
  const [sort, setSort] = useState("");
  console.log(sort, "sort");
  return (
    <>
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-filter-container">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="filter-select"
          name=""
          id=""
        >
          <option value="">Seçiniz</option>
          <option value="inc">Artan</option>
          <option value="dec">Azalan</option>
        </select>
      </div>
      <div className="menu-container">
        {menudata
          .sort((a, b) =>
            sort == "inc"
              ? b.price - a.price
              : sort == "dec"
              ? a.price - b.price
              : null
          )
          .map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
      </div>
    </>
  );
};

export default Menu;
