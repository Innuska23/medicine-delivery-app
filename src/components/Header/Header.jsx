import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.headerNav}>
        <ul className={s.headerUl}>
          <li className={s.headerLi}>
            <NavLink className={s.headerLink} to="/shop">
              {" "}
              Shop
            </NavLink>
          </li>
          <li>
            <span>|</span>
          </li>
          <li className={s.headerLi}>
            <NavLink className={s.headerLink} to="/cart">
              {" "}
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
